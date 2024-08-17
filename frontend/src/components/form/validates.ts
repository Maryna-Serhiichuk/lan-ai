type ValidateResultType = (value: string, mode?: 'login' | 'sign') => string | undefined

export const emailValidator: ValidateResultType = (value) => {
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
      return 'Must be correct email';
    return undefined;
};

export const passwordValidator: ValidateResultType = (value) => {
    if(value?.length < 6) {
        return 'Password is too short';
    }
    return undefined;
};