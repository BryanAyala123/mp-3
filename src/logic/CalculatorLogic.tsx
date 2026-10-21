import { useState } from 'react';

export default function useCalculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    function calculate(op: string) {
        const a = Number(num1);
        const b = Number(num2);
        let total = 0;

        if (op === '+') total = a + b;
        if (op === '-') total = a - b;
        if (op === '*') total = a * b;
        if (op === '/') total = a / b;
        if (op === '**') {
            total = 1;
            for (let i = 0; i < b; i++) {
                total = total * a;
            }
        }

        setResult(String(total));
    }

    function clear() {
        setNum1('');
        setNum2('');
        setResult('');
    }

    return { num1, setNum1, num2, setNum2, result, calculate, clear };
}