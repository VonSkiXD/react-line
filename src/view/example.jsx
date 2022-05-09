    import React, { useState } from 'react';
    import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

export function V2Example() {
    const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };

    const updateXarrow = useXarrow();
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

    const [xarrows, setXarrows] = useState([]);
    const [selected, setSelected] = useState();

    const XarrowDiv = ({ setSelected, selected, xarrow }) => {
        const [state, setState] = useState({ color: 'coral' });
        const defProps = {
            passProps: {
                className: 'xarrow',
                onMouseEnter: () => setState({ color: 'IndianRed' }),
                onMouseLeave: () => setState({ color: 'coral' }),
                onClick: (e) => {
                    e.stopPropagation(); //so only the click event on the box will fire on not on the container itself
                    setSelected({
                        id: { start: xarrow.start, end: xarrow.end },
                        type: 'arrow',
                    });
                },
                cursor: 'pointer',
            },
        };
        let color = state.color;
        if (selected && selected.type === 'arrow' && selected.id.start === xarrow.start && selected.id.end === xarrow.end)
            color = 'red';
        return (
            <Xarrow {...{...defProps, color,...xarrow}} />
        );
    }

    const handelSeleted = () => {
        console.log('11');
        setSelected(null);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' } }
        onClick= {()=>handelSeleted()}>
            <Xwrapper>
                <DraggableBox id={'elem1'} />
                <DraggableBox id={'elem2'} />
                {xarrows.map((xarrow, index) =>
                    <XarrowDiv key={index}
                        selected={selected}
                        setSelected={setSelected}
                        xarrow={xarrow} />
                )}
            </Xwrapper>
        </div>
    );
}