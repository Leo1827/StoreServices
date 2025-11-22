import { useState } from "react";

const Step3 = () => {
    const [selected, setSelected] = useState("pref1");

    return (
        <div className="p-4 bg-white rounded-xl">
            <h1 className="text-xl font-semibold mb-6 text-center">
                Elige tu(s) preferencia(s)
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">

                {/* CARD 1 */}
                <div
                    onClick={() => setSelected("pref1")}
                    className={`relative cursor-pointer w-full md:w-[46%] rounded-2xl p-6 transition-all 
                        ${selected === "pref1"
                            ? "border-2 border-[#F9A823] bg-[#dd901331]"
                            : "bg-[#F6F5F5]"
                        }
                    `}
                >
                    <div className="text-center my-10">
                        {/* SVG */}
                        <svg
                            width="105"
                            height="130"
                            viewBox="0 0 85 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto"
                        >
                            <path
                                d="M84.9392 74.7146C84.9392 73.3885 83.8787 72.3086 82.564 72.3086H72.4721V18.073C72.4721 8.10765 64.4681 0 54.6302 0H17.8418C8.00396 0 0 8.10765 0 18.073V81.983C0 91.3832 7.10911 99.9273 16.2234 99.9273C26.1662 99.9273 67.2134 100 67.2134 100C77.0237 100 85 91.9147 85 81.983L84.9337 74.7202L84.9392 74.7146ZM20.3938 53.4188C20.3938 51.5219 21.9184 49.9776 23.7909 49.9776H43.207C45.1956 49.9776 46.8196 48.3382 46.8196 46.3183C46.8196 44.2983 45.2011 42.6589 43.207 42.6589H30.1543C30.0383 42.6589 29.9223 42.6533 29.8063 42.6421C24.2328 42.4519 19.7531 37.8133 19.7531 32.1229C19.7531 26.4324 24.4207 21.5868 30.1543 21.5868H33.2863V17.0322C33.2863 15.1354 34.8109 13.5911 36.6835 13.5911C38.556 13.5911 40.0806 15.1354 40.0806 17.0322V21.5868H50.2167C52.0893 21.5868 53.6139 23.1312 53.6139 25.028C53.6139 26.9248 52.0893 28.4691 50.2167 28.4691H30.1488C28.1603 28.4691 26.5363 30.1085 26.5363 32.1285C26.5363 34.1484 28.1547 35.7878 30.1488 35.7878H43.2015C48.9352 35.7878 53.6028 40.5159 53.6028 46.3295C53.6028 52.143 48.9352 56.8655 43.2015 56.8655H40.0695V61.4201C40.0695 63.3169 38.545 64.8612 36.6724 64.8612C34.7998 64.8612 33.2753 63.3169 33.2753 61.4201V56.8655H23.7854C21.9129 56.8655 20.3883 55.3212 20.3883 53.4244L20.3938 53.4188ZM67.2134 95.188H28.8673C32.3749 91.8923 34.5734 87.1923 34.5734 81.983V77.2997L80.1888 77.1262L80.2551 81.983C80.2551 89.2681 74.4054 95.188 67.2189 95.188H67.2134Z"
                                fill={selected === "pref1" ? "#F9A823" : "#ADA8A8"}
                            />
                        </svg>

                        <h3 className="text-2xl text-muted mt-5 mb-3">Facturación</h3>
                        <span className="text-lg">
                            Requiere factura de servicio.
                        </span>
                    </div>

                    {/* BALL */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[45px] h-[52px] rounded-full border-[25px] border-white border-t-[20px] border-t-[#575151]">
                        <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[35px] h-[35px] rounded-full border-[11px] 
                            ${selected === "pref1" ? "border-[#F9A823]" : "border-[#d4d0d0]"}`}
                        ></div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div
                    onClick={() => setSelected("pref2")}
                    className={`relative cursor-pointer w-full md:w-[46%] rounded-2xl p-6 transition-all
                        ${selected === "pref2"
                            ? "border-2 border-[#F9A823] bg-[#dd901331]"
                            : "bg-[#F6F5F5]"
                        }
                    `}
                >
                    <div className="text-center my-10">
                        {/* SVG */}
                        <svg
                            width="134"
                            height="134"
                            viewBox="0 0 101 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto"
                        >
                            <path
                                d="M98.1982 49.3101C94.0373 44.8549 92.8987 38.3181 95.3034 32.6906C98.0318 26.3052 93.9022 19.0645 87.0739 18.2632C81.0569 17.5566 76.0342 13.2909 74.3027 7.416C72.3373 0.748998 64.5758 -2.11017 58.8369 1.71872C53.7791 5.09235 47.2226 5.09235 42.1648 1.71872C36.4259 -2.11017 28.6643 0.750314 26.6989 7.416C24.9675 13.2909 19.9448 17.5579 13.9277 18.2632C7.10082 19.0645 2.97114 26.3052 5.69826 32.6906C8.10302 38.3181 6.96433 44.8549 2.80345 49.3101C-1.91767 54.3665 -0.483913 62.5993 5.66187 65.7164C11.0771 68.4624 14.3554 74.211 13.9979 80.3319C13.5924 87.2765 19.9188 92.6515 26.6054 91.0396C32.4977 89.6199 38.659 91.8896 42.2714 96.8119C46.3699 102.396 54.6305 102.396 58.729 96.8119C62.3413 91.8909 68.5027 89.6199 74.395 91.0396C81.0816 92.6501 87.408 87.2765 87.0024 80.3319C86.645 74.211 89.9233 68.4637 95.3385 65.7164C101.483 62.5993 102.918 54.3665 98.1969 49.3101H98.1982ZM76.1706 39.4865L46.8989 74.1557C46.3101 74.8531 45.4613 75.2702 44.5552 75.3057C44.5123 75.307 44.4707 75.3083 44.4279 75.3083C43.5673 75.3083 42.7406 74.9636 42.1297 74.3452L25.0039 57.0099C23.7352 55.7257 23.7352 53.6429 25.0039 52.3574C26.2726 51.0719 28.3303 51.0732 29.6003 52.3574L44.2407 67.1769L71.2298 35.2116C72.3958 33.83 74.447 33.6682 75.8119 34.8484C77.1767 36.0287 77.3366 38.105 76.1706 39.4865Z"
                                fill={selected === "pref2" ? "#F9A823" : "#ADA8A8"}
                            />
                        </svg>

                        <h3 className="text-2xl mt-5 mb-3 text-gray-600">
                            Perfil verificado
                        </h3>
                        <span className="text-lg block">
                            Perfiles que completaron<br />
                            filtros de seguridad y calidad.
                        </span>
                    </div>

                    {/* BALL */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[45px] h-[52px] rounded-full border-[25px] border-white border-t-[20px] border-t-[#575151]">
                        <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[35px] h-[35px] rounded-full border-[11px] 
                            ${selected === "pref2" ? "border-[#F9A823]" : "border-[#d4d0d0]"}`}
                        ></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Step3;
