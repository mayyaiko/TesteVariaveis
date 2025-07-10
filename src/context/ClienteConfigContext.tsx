import { createContext, useContext } from 'react';
import { clienteConfig } from '../config/clienteConfig';

type ClienteConfigType = {
  name: string;
  primaryColor: string;
  logoUrl: string;
};

export const ClienteConfigContext = createContext<ClienteConfigType>(clienteConfig);

export const useClienteConfig = () => useContext(ClienteConfigContext);
