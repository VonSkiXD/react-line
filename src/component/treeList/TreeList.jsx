import React from "react";

export default class TreeList extends React.Component {
    constructor(props) {
        super(props);
        const DraggableBox = ({ id }) => {
            return (
                <div>
                    <div id={id} onDragStart={dropStart} onDrop={dropItem} onDragOver={allowDrop} draggable="true" style={boxStyle}>
                        {id}
                    </div>
                </div>
            );
        };
        const dropStart = (event) => {
            console.log('dropStart', event.target.id);
            event.dataTransfer.setData("dropId", event.target.id);
        }
        function allowDrop(event) {
            event.preventDefault();
        }
        const dropItem = (event) => {
            event.preventDefault();
            var start = event.dataTransfer.getData("dropId");
            var end = event.target.id;
            xarrows.push({
                start: start,
                end: end
            });
            setXarrows(xarrows);
            updateXarrow();
        }
    }
    render() {
        return (
            <div className="m-0 flex justify-center">
                <div className="flex flex-col text-3xl">
                    {this.state.left.map((item, index) => (
                        <div key={"lr" + index} className=' flex flex-col w-50 border-2 border-black'>
                            <div className='flex' onClick={() => this.clickRoot(index)}>
                                <div className={item.checked ? "i ic:sharp-arrow-right" : "i ic:twotone-arrow-drop-down"}></div>
                                {"root:" + item.id}
                            </div>
                            {!item.checked && item.list.map((l, i) => (
                                <div key={"lr" + index + "l" + i} id={"lr" + index + "l" + i} className='ml-4'
                                    onDragStart={dropStart} onDrop={dropItem} onDragOver={allowDrop} draggable="true">
                                    {"list:" + l.id}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}