import { createContext, useState, useEffect } from 'react';
import http from "../http-common";

const ExpContext = createContext();

export const ExpProvider = ({ children }) => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses()
      }, [])

      // Fetch feedback
  const fetchExpenses = async () => {

    if(expenses.length <=0){
        http
        .get("/list")
        .then((res) => {
          const tempExpenses = [];
          res.data.forEach((d) => tempExpenses.push(d));
          setExpenses(tempExpenses)
        });
        console.log(expenses);
    }
       
      

  }

  return (
    <ExpContext.Provider
      value={{
        expenses,
      }}
    >
      {children}
    </ExpContext.Provider>
  );

}

export default ExpContext;