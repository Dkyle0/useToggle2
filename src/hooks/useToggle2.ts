import { useState } from "react";

type ToggleFunction<T> = (newValue?: T) => void;

export const useToggle = (defaultValue: string[] = ['true', 'false']): [string, ToggleFunction<string>] => {
    const valuesArray = defaultValue;

    const [value, setValue] = useState<string>(defaultValue[0]);

    const toggleValue: ToggleFunction<string> = (newValue?: string) => {
        if (newValue !== undefined) {
            setValue(newValue);
        } else {
            const index = valuesArray.indexOf(value);
            if (index !== -1 && index + 1 < valuesArray.length) {
                setValue(valuesArray[index + 1]);
            } else {
                setValue(valuesArray[0]);
            }
        }
    }

    return [value, toggleValue];
}
