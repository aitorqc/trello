import React, { useEffect } from "react"
import { useState } from "react"

import List from "./List"
import Card from "./Card"

const todo = [
    {
        id: "todo_1",
        text: 'Implementar inicio de sesion'
    },
    {
        id: "todo_2",
        text: 'Implementar fin de sesion'
    }
]

const inProgress = [
    {
        id: "inProgress_1",
        text: 'Implementando inicio de sesion'
    }
]

const done = [
    {
        id: "done_1",
        text: 'Inicio de sesion completado'
    }
]

export default function Board() {
    const [dragged, setDragged] = useState(null);

    const [listOfLists, setListOfLists] = useState({
        todo,
        inProgress,
        done
    });

    const handleDrop = (event) => {
        event.preventDefault();

        const listOfListClone = structuredClone(listOfLists);

        // Origen - Origen - no hacer nada / Origen - Otro lugar - comprobar si existe - si: No hacer nada no: borrar
        if (listOfLists[event.target.id].find((item) => item.text.toLowerCase() === dragged.data.text.toLowerCase())) {

        } else {
            listOfListClone[event.target.id].push({
                id: event.target.id + "_" + (listOfListClone[event.target.id].length + 1),
                text: dragged.data.text,
            });

            const newList = listOfListClone[dragged.list].filter((item) => item.id !== dragged.data.id);
            listOfListClone[dragged.list] = newList;
        }

        setListOfLists(listOfListClone);

    }

    return (
        <div className="mt-6">
            <h1 className="text-3xl font-bold mb-4 text-white">
                Development
            </h1>
            <main className="flex flex-wrap gap-4 justify-between mb-10">
                <List id={"todo"} name={"todo"} handleDrop={handleDrop} bg={"bg-yellow-200"}>
                    {
                        listOfLists.todo?.map((item) => (
                            <Card
                                key={item.id}
                                list="todo"
                                {...item}
                                setDragged={setDragged} />
                        ))
                    }
                </List>

                <List id={"inProgress"} name={"in progress"} handleDrop={handleDrop} bg={"bg-red-200"}>
                    {
                        listOfLists.inProgress?.map((item) => (
                            <Card
                                key={item.id}
                                list="inProgress"
                                {...item}
                                setDragged={setDragged} />
                        ))
                    }
                </List>

                <List id={"done"} name={"done"} handleDrop={handleDrop} bg={"bg-green-200"}>
                    {
                        listOfLists.done?.map((item) => (
                            <Card
                                key={item.id}
                                list="done"
                                {...item}
                                setDragged={setDragged} />
                        ))
                    }
                </List>
            </main>
        </div>
    )
}
