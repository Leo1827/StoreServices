import { useState } from "react"
import { Search } from "lucide-react"
import TabsContent from "./TabsContent"

const ServiceTabs = () => {
    const [step, setStep] = useState("Step 1")

    const activeTab =
        "bg-[#FFFFFF] text-[#F9A823] shadow-md py-3"

    const normalTab =
        "text-black hover:bg-[#f7f3f3] transition-all py-3"

    return (
        <div className="bg-[#F8F4F3] py-6 w-full">

            {/* TABS */}
            <div className="flex justify-center px-3">
                <ul
                    className="
                        flex items-center 
                        bg-[#F2EDEC] 
                        border border-[#d6d1d1]
                        rounded-[45px]
                        h-[65px]
                        px-4
                        shadow-inner
                        w-full max-w-[1100px]  
                        gap-2
                    "
                >
                    {/* TAB 1 */}
                    <li
                        className={`
                            flex justify-center items-center 
                            flex-1
                            rounded-[35px] cursor-pointer 
                            text-[1rem] md:text-[1.2rem]
                            transition-all duration-300 font-medium px-2
                            ${step === "Step 1" ? activeTab : normalTab}
                        `}
                        onClick={() => setStep("Step 1")}
                    >
                        Servicios
                    </li>

                    {/* TAB 2 */}
                    <li
                        className={`
                            flex justify-center items-center 
                            flex-1
                            rounded-[35px] cursor-pointer 
                            text-[1rem] md:text-[1.2rem]
                            transition-all duration-300 font-medium px-2
                            ${step === "Step 2" ? activeTab : normalTab}
                        `}
                        onClick={() => setStep("Step 2")}
                    >
                        Disponibilidad
                    </li>

                    {/* TAB 3 */}
                    <li
                        className={`
                            flex justify-center items-center gap-3
                            flex-1
                            rounded-[35px] cursor-pointer 
                            text-[1rem] md:text-[1.2rem]
                            transition-all duration-300 font-medium px-2
                            ${step === "Step 3" ? activeTab : normalTab}
                        `}
                        onClick={() => setStep("Step 3")}
                    >
                        Preferencias

                        {/* BOTÓN BUSCAR (Solo escritorio) */}
                        <a
                            type="button"
                            className="
                                hidden md:flex
                                bg-yellow-500 text-white px-3 py-1 ml-8 rounded-[100px]
                                items-center
                                text-[1rem]
                                shadow-md hover:shadow-lg
                            "
                        >
                            <Search size={18} />
                            <span className="ml-1">Buscar</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* BOTÓN BUSCAR (Solo móvil) */}
            <div
                className={`
                    md:hidden flex justify-center mt-4
                    transition-all duration-300
                    ${step === "Step 3" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
                `}
            >
                <button
                    className="
                        bg-yellow-500 text-white px-6 py-2 rounded-[100px]
                        flex items-center gap-2 text-[1.1rem]
                        shadow-md hover:shadow-lg active:scale-95
                        transition-all duration-300
                    "
                >
                    <Search size={20} />
                    Buscar
                </button>
            </div>

            {/* CONTENIDO */}
            <div className="flex justify-center pt-10 px-4">
                <div
                    className="
                        bg-white shadow-lg rounded-[20px]
                        w-full max-w-[1100px]
                        min-h-[650px] p-6
                    "
                >
                    <TabsContent step={step} />
                </div>
            </div>

        </div>
    )
}

export default ServiceTabs
