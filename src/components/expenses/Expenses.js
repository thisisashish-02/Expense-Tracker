import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
    const { expenses } = props;
    const [year, setYear] = useState('2021');

    const changeFilterHandler = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredItems = expenses.filter((expense) =>
        expense.date.getFullYear().toString() === year
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} onChangeFilter={changeFilterHandler} />
            <ExpenseChart expenses={filteredItems} />
            <ExpenseList items={filteredItems} />
        </Card>
    )
}

export default Expenses;