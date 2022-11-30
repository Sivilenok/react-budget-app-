import { createContext, ReactNode, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContext, ICurrencyContextProviderProps, ICurrencyOption } from "./index";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

type CurrencyOption = {
    label: keyof Currency;
    value: Currency;
};

const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
        () => ({
            currentCurrency: { value: Currency.USD, label: "USD" },
            currencies: [
                { value: Currency.USD, label: "USD" },
                { value: Currency.EUR, label: "EUR" },
                { value: Currency.GBR, label: "GBR" },
            ],
            setCurrency: (currentCurrency: ICurrencyOption) => {
                setCurrencyContext(ctx => ({
                    ...ctx,
                    currentCurrency,
                }));
            }
        })
    );

    return currencyContext;
};

export const CurrencyContextProvider = () =>
    useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({children}: ICurrencyContext) => {
    return (
        <CurrencyContext.Provider value={useCurrencyContextValue()}>
            {children}
        </CurrencyContext.Provider>
    );
};
