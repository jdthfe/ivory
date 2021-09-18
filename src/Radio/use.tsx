import { useState, useCallback } from 'react';
import { UseRadioOption } from './PropsType';
// useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

export const useRadio = function<T>(opt: UseRadioOption<T>) {
    const { setValue, initLabel = '', value } = opt;
    const [label, setLabel] = useState<T>(initLabel);

    const _onChange = useCallback(
        e => {
            const val = label || e.currentTarget.value;
            setValue(val);
        },
        [label, setValue],
    );

    return {
        label,
        setLabel,
        bind: {
            label,
            value,
            _onChange,
        },
    };
};

export type UseRadioReturn = ReturnType<typeof useRadio>;

export const useFocus = () => {
    const [focus, setFocus] = useState(false);
    const _onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const _onBlur = useCallback(() => {
        setFocus(false);
    }, []);

    return {
        focus,
        setFocus,
        _onFocus,
        _onBlur,
    };
};

export const useJoinFn = (...args: any[]) => {
    return useCallback(
        (e: any) => {
            if (args.length) {
                args.map(fn => {
                    try {
                        fn && fn(e);
                    } catch (err) {
                        console.log(err);
                    }
                });
            }
        },
        [args],
    );
};
