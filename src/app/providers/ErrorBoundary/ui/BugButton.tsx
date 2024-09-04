import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(!error);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            Throw error
        </Button>
    );
};
