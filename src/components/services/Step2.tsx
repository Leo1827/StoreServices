import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Step2 = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [hour, setHour] = useState(1);
    const [duration, setDuration] = useState(1);
    const [period, setPeriod] = useState<"AM" | "PM">("AM");

    return (
        <div className="py-12 flex justify-center px-3">
            <div className="w-full max-w-6xl rounded-2xl p-6">

                <h1 className="text-2xl font-bold text-center mb-8">
                    Selecciona la fecha de tu evento
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 items-start">

                    {/* CALENDARIO */}
                    <div className="flex justify-center md:justify-start w-full">
                        <div className="bg-white rounded-xl p-4 w-[600px]">

                            {/* CONTENEDOR AJUSTADO */}
                            <div className="transform scale-[0.80] origin-top">
                                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                                    <DatePicker
                                        disableToolbar
                                        variant="static"
                                        value={selectedDate}
                                        onChange={setSelectedDate}
                                        className="rounded-xl overflow-hidden"
                                        PopoverProps={{ disableRestoreFocus: true }}
                                        
                                    />
                                </MuiPickersUtilsProvider>
                            </div>

                        </div>
                    </div>

                    {/* HORAS + DURACIÓN */}
                    <div className="flex flex-col items-end gap-16 mt-8 mx-16">

                        {/* HORA DE INICIO */}
                        <div className="bg-[#FCFCFC] border border-black/20 rounded-xl p-6 w-80">
                            <p className="text-center text-lg font-semibold mb-4">
                                Hora de inicio
                            </p>

                            <div className="flex justify-center items-center gap-4">

                                {/* SUBIR / BAJAR */}
                                <div className="flex flex-col items-center">
                                    <button
                                        onClick={() => setHour(hour + 1)}
                                        className="p-2 hover:bg-gray-200 rounded-full"
                                    >
                                        <i className="fa-solid fa-chevron-up text-black"></i>
                                    </button>

                                    <input
                                        type="number"
                                        value={hour}
                                        readOnly
                                        className="w-16 h-10 text-center border border-gray-300 rounded-full bg-white"
                                    />

                                    <button
                                        onClick={() => hour > 1 && setHour(hour - 1)}
                                        className="p-2 hover:bg-gray-200 rounded-full"
                                    >
                                        <i className="fa-solid fa-chevron-down text-black"></i>
                                    </button>
                                </div>

                                {/* ICONOS AM / PM */}
                                <div className="flex flex-col items-center">
                                    <div className="flex border border-black/30 rounded-2xl h-12 w-28 overflow-hidden">

                                        <button
                                            onClick={() => setPeriod("AM")}
                                            className={`flex-1 flex items-center justify-center gap-1 ${
                                                period === "AM"
                                                    ? "bg-[#F9A823] text-white"
                                                    : "bg-white text-black"
                                            }`}
                                        >
                                            <Sun size={18} />
                                        </button>

                                        <button
                                            onClick={() => setPeriod("PM")}
                                            className={`flex-1 flex items-center justify-center gap-1 ${
                                                period === "PM"
                                                    ? "bg-[#5726F9] text-white"
                                                    : "bg-white text-black"
                                            }`}
                                        >
                                            <Moon size={18} />
                                        </button>
                                    </div>

                                    <span className="mt-2 text-sm">Periodo</span>
                                </div>
                            </div>
                        </div>

                        {/* DURACION */}
                        <div className="bg-[#FCFCFC] border border-black/20 rounded-xl p-6 w-80">
                            <p className="text-center text-lg font-semibold mb-4">
                                Duración
                            </p>

                            <div className="flex items-center justify-center gap-3">

                                <button
                                    onClick={() => duration > 1 && setDuration(duration - 1)}
                                    className="p-2 hover:bg-gray-200 rounded-full"
                                >
                                    <i className="fa-solid fa-chevron-left text-black"></i>
                                </button>

                                <input
                                    type="number"
                                    readOnly
                                    value={duration}
                                    className="w-20 h-10 border border-gray-300 rounded-full text-center"
                                />

                                <button
                                    onClick={() => setDuration(duration + 1)}
                                    className="p-2 hover:bg-gray-200 rounded-full"
                                >
                                    <i className="fa-solid fa-chevron-right text-black"></i>
                                </button>

                                <span className="text-sm ml-2">HRS</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
