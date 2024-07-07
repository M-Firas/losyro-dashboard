import  { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [actualWorkTodos, setActualWorkTodos] = useState([]);
  const [completedActualWorkTodos, setCompletedActualWorkTodos] = useState([]);
  const [xPointsTodos, setXPointsTodos] = useState([]);
  const [completedXPointsTodos, setCompletedXPointsTodos] = useState([]);

  useEffect(() => {
    const storedActualWorkTodos = JSON.parse(localStorage.getItem('actualWorkTodos')) || [];
    const storedCompletedActualWorkTodos = JSON.parse(localStorage.getItem('completedActualWorkTodos')) || [];
    const storedXPointsTodos = JSON.parse(localStorage.getItem('xPointsTodos')) || [];
    const storedCompletedXPointsTodos = JSON.parse(localStorage.getItem('completedXPointsTodos')) || [];

    setActualWorkTodos(storedActualWorkTodos);
    setCompletedActualWorkTodos(storedCompletedActualWorkTodos);
    setXPointsTodos(storedXPointsTodos);
    setCompletedXPointsTodos(storedCompletedXPointsTodos);
  }, []);

  const addTodo = (text, category) => {
    if (category === 'Actual Work') {
      const newTodos = [...actualWorkTodos, { text }];
      setActualWorkTodos(newTodos);
      localStorage.setItem('actualWorkTodos', JSON.stringify(newTodos));
    } else {
      const newTodos = [...xPointsTodos, { text }];
      setXPointsTodos(newTodos);
      localStorage.setItem('xPointsTodos', JSON.stringify(newTodos));
    }
  };

  const markComplete = (index, category) => {
    if (category === 'Actual Work') {
      const newTodos = [...actualWorkTodos];
      const [completedTodo] = newTodos.splice(index, 1);
      setActualWorkTodos(newTodos);
      setCompletedActualWorkTodos([...completedActualWorkTodos, completedTodo]);
      localStorage.setItem('actualWorkTodos', JSON.stringify(newTodos));
      localStorage.setItem('completedActualWorkTodos', JSON.stringify([...completedActualWorkTodos, completedTodo]));
    } else {
      const newTodos = [...xPointsTodos];
      const [completedTodo] = newTodos.splice(index, 1);
      setXPointsTodos(newTodos);
      setCompletedXPointsTodos([...completedXPointsTodos, completedTodo]);
      localStorage.setItem('xPointsTodos', JSON.stringify(newTodos));
      localStorage.setItem('completedXPointsTodos', JSON.stringify([...completedXPointsTodos, completedTodo]));
    }
  };

  const undoComplete = (index, category) => {
    if (category === 'Actual Work') {
      const newCompletedTodos = [...completedActualWorkTodos];
      const [uncompletedTodo] = newCompletedTodos.splice(index, 1);
      setCompletedActualWorkTodos(newCompletedTodos);
      setActualWorkTodos([...actualWorkTodos, uncompletedTodo]);
      localStorage.setItem('completedActualWorkTodos', JSON.stringify(newCompletedTodos));
      localStorage.setItem('actualWorkTodos', JSON.stringify([...actualWorkTodos, uncompletedTodo]));
    } else {
      const newCompletedTodos = [...completedXPointsTodos];
      const [uncompletedTodo] = newCompletedTodos.splice(index, 1);
      setCompletedXPointsTodos(newCompletedTodos);
      setXPointsTodos([...xPointsTodos, uncompletedTodo]);
      localStorage.setItem('completedXPointsTodos', JSON.stringify(newCompletedTodos));
      localStorage.setItem('xPointsTodos', JSON.stringify([...xPointsTodos, uncompletedTodo]));
    }
  };

  return (
    <TodosContext.Provider value={{
      actualWorkTodos,
      completedActualWorkTodos,
      xPointsTodos,
      completedXPointsTodos,
      addTodo,
      markComplete,
      undoComplete
    }}>
      {children}
    </TodosContext.Provider>
  );
};

