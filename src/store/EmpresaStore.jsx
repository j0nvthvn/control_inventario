import { create } from "zustand";
import { ContarUsuariosXEmpresa, MostrarEmpresa, supabase } from "../index";

export const useEmpresaStore = create((set, get) => ({
    contadorUsuarios: 0,
    dataempresa:[],
    mostrarEmpresa: async (p) => {
        const response = await MostrarEmpresa(p);
        set({ dataempresa: response });
        return response;
    },
    ContarUsuariosXEmpresa: async (p) => {
        const response = await ContarUsuariosXEmpresa(p);
        set({contadorUsuarios: response});
        return response;
    }
}));