import React, { useState ,useEffect} from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

// import TreeList from '../component/treeList/TreeList'
import '../icon/arrow/iconfont.css';
export function ListExample() {
    //左树
    const [leftTree, setLeftTree] = useState([
        { id: 'lh1', collapsed: false, list: [{ id: 'ls1' }, { id: 'ls2' }] },
        { id: 'lh2', collapsed: false, list: [{ id: 'ls3' }, { id: 'ls4' }] }
    ]);
    //右树
    const [rightTree, setRightTree] = useState([
        { id: 'rh1', collapsed: false, list: [{ id: 'rs1' }, { id: 'rs2' }] },
        { id: 'rh2', collapsed: false, list: [{ id: 'rs3' }, { id: 'rs4' }] },
        { id: 'rh3', collapsed: false, list: [{ id: 'rs5' }, { id: 'rs6' }] },
        { id: 'rh4', collapsed: false, list: [{ id: 'rs7' }, { id: 'rs8' }] },
    ]);
    //映射关系
    const [map, setMap] = useState([
        { start: 'ls1', end: 'rs1' ,property:{}},
        { start: 'ls2', end: 'rs2' ,property:{}},
    ]);
    //箭头
    const [xarrows, setXarrows] = useState([]);
    //选中状态
    const [selected, setSelected] = useState();

    //重新计算箭头位置
    const initXarrows = (maps) => {
        let newXarrows = [];
        maps.forEach(item => {
            let s = "ls"+item.start;
            let e = "rs"+item.end;
            //左树循环
            leftTree.map((t)=>{
                for (const l of t.list) {
                    if(l.id === item.start){
                        if(t.collapsed){
                            s = "lh"+t.id;
                        }
                        break;
                    }
                }
            });
            //右树循环
            rightTree.map((t)=>{
                for (const l of t.list) {
                    if(l.id === item.end){
                        if(t.collapsed){
                            e = "rh"+t.id;
                        }
                        break;
                    }
                }
            });
            newXarrows.push({
                start: s,
                end: e
            });
        });
        setXarrows(newXarrows);
        updateXarrow();
    }
    useEffect(()=>{
        initXarrows(map);
    },[]);
    const dropStart = (event) => {
        event.dataTransfer.setData("dropId", event.target.id);
    }
    const allowDrop = (event) => {
        event.preventDefault();
    }

    const updateXarrow = useXarrow();
    const dropItem = (event) => {
        event.preventDefault();
        var dropId = event.dataTransfer.getData("dropId");
        if(dropId[0]==='l'){
            var start = event.dataTransfer.getData("dropId");
            var end = event.target.id;
        }else{
            var start = event.target.id;
            var end = event.dataTransfer.getData("dropId");
        }
        if (start[0] == end[0]) return;
        xarrows.push({
            start: start,
            end: end
        });
        let newMap = [...map];
        newMap.push({
            start: start.substring(2),
            end: end.substring(2)
        });
        setMap(newMap);
        initXarrows(newMap);
    }

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
            <Xarrow {...{ ...defProps, color, ...xarrow }} />
        );
    }
    const TreeList = ({ side, tree }) => {
        const clickRoot = (id, side) => {
            let tree = side === 'left' ? leftTree.slice() : rightTree.slice();
            let setTree = side === 'left' ? setLeftTree : setRightTree;
            tree.map((t) => {
                if (t.id === id) {
                    t.collapsed = !t.collapsed;
                }
            });
            setTree(tree);
            initXarrows(map);
        }
        return (
            tree.map((item) => (
                <div key={side[0] + "h" + item.id} className=' flex flex-col w-50 border-2 border-black'>
                    <div id={side[0] + "h" + item.id} className='flex' onClick={() => clickRoot(item.id, side)}>
                        <div className={item.collapsed ? "i ic:sharp-arrow-right" : "i ic:twotone-arrow-drop-down"}></div>
                        {"root:" + item.id}
                    </div>
                    {!item.collapsed && item.list.map((l) => (
                        <div key={side[0] + "s" + l.id} id={side[0] + "s" + l.id} className='ml-4'
                            onDragStart={dropStart} onDrop={dropItem} onDragOver={allowDrop} draggable="true">
                            {"list:" + l.id}
                        </div>
                    ))}
                </div>
            ))
        )
    }

    return (
        <div className="flex flex-row">
            <Xwrapper>
                <div className=" basis-1/3 border-dark-50 border-1">
                    <div className="m-0 flex justify-center">
                        <div className="flex flex-col text-3xl">
                            <TreeList side={"left"} tree={leftTree}></TreeList>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 border-dark-100 border-1">
                    <div className="m-0 flex justify-center">
                        <div className="flex flex-col text-3xl">
                            <TreeList side={"right"} tree={rightTree}></TreeList>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 border-dark-100 border-1">

                </div>
                {xarrows.map((xarrow, index) =>
                    <XarrowDiv key={index}
                        selected={selected}
                        setSelected={setSelected}
                        xarrow={xarrow} />
                )}
            </Xwrapper>
        </div>
    )
}