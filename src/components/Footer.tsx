const Footer = (): JSX.Element => {
    return (
        <footer className="w-full bg-white border-t text-gray-700 py-4">
            <div className="max-w-7xl mx-auto px-4">

                {/* GRID RESPONSIVE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* IZQUIERDA */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-sm">
                        <span className="font-medium">© 2025 DeUna</span>

                        <a href="#" className="hover:text-black">
                            Política de privacidad
                        </a>

                        <a href="#" className="hover:text-black">
                            Términos y condiciones
                        </a>

                        <a href="#" className="hover:text-black">
                            Conócenos
                        </a>
                    </div>

                    {/* DERECHA */}
                    <div className="flex flex-col sm:flex-row justify-start md:justify-end items-start sm:items-center gap-4 text-sm">

                        <a className="hover:text-black cursor-pointer">
                            Idioma (ESP)
                        </a>

                        <a href="#" className="hover:text-black">
                            Centro de ayuda
                        </a>

                        {/* ICONOS */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:opacity-70">
                                <svg width="12" height="20" viewBox="0 0 9 17" fill="currentColor">
                                    <path d="M2.66838 17.0004C2.66556 16.9285..." />
                                </svg>
                            </a>

                            <a href="#" className="hover:opacity-70">
                                <svg width="22" height="22" viewBox="0 0 19 19" fill="currentColor">
                                    <path d="M18.9854 6.2982C18.9689..." />
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
