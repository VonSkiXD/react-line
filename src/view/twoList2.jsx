import React, { useState, useEffect } from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import { Input } from '@arco-design/web-react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


import "@arco-design/web-react/dist/css/arco.css";
import "./css/TreeList.css"
import '../icon/arrow/iconfont.css';

export function ListExample() {
    //左树
    const [leftTree, setLeftTree] = useState([
        {
            "children": [
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "rfG-u7obRlB0cvyw3wpwS",
                            "leaf": true,
                            "name": "name0-0-0-0",
                            "position": "0-0-0-0"
                        },
                        {
                            "collapsed": false,
                            "id": "Tve0eeMXHmA3U19_EGcHi",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-0-0-1"
                        },
                        {
                            "collapsed": false,
                            "id": "2S4vEdEtHOi4xGAuuGLBt",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-0-0-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "vPUFfTo7qFr1mgNyz9nY-",
                    "leaf": false,
                    "name": "name0-0-0",
                    "position": "0-0-0"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "Fe9t_qWs_mXcaEDa8j76M",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-0-1-0"
                        },
                        {
                            "collapsed": false,
                            "id": "DjTL6zZqX800Tcy6OfLuU",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-0-1-1"
                        },
                        {
                            "collapsed": false,
                            "id": "Lb7xMmLhaQWUF1hqnbe9H",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-0-1-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "n9fgJvD1ZyFEJQi87157c",
                    "leaf": false,
                    "name": "name1",
                    "position": "0-0-1"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "aUaAMea0fiFYfZuR33geq",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-0-2-0"
                        },
                        {
                            "collapsed": false,
                            "id": "MZ-Tr4_Nr7eqDjM_wvPAe",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-0-2-1"
                        },
                        {
                            "collapsed": false,
                            "id": "nFzJG1MrsHXDrNKrW9TUK",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-0-2-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "WnibWxlAqVQHIFYZXwZ0-",
                    "leaf": false,
                    "name": "name2",
                    "position": "0-0-2"
                }
            ],
            "collapsed": false,
            "id": "hdms0kAtYTyP0f0Lp-WrT",
            "leaf": false,
            "name": "name:0",
            "position": "0-0"
        },
        {
            "children": [
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "iEEqmOwvSgZjzaHl3tcQy",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-1-0-0"
                        },
                        {
                            "collapsed": false,
                            "id": "RwPDH7TM-WEKcIURs59L_",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-1-0-1"
                        },
                        {
                            "collapsed": false,
                            "id": "UXHvvugZxrOcI-Aq389Fw",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-1-0-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "tidjCZw9z798Jh2vG0UkE",
                    "leaf": false,
                    "name": "name0",
                    "position": "0-1-0"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "s_dAvgEvxuGnbCdTPtObQ",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-1-1-0"
                        },
                        {
                            "collapsed": false,
                            "id": "L8Ebf1-xFxE2Y1dw3fil0",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-1-1-1"
                        },
                        {
                            "collapsed": false,
                            "id": "gRUqDAhNYWGgbTic0oKYL",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-1-1-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "l6KihMpN7f-E27ZFz25js",
                    "leaf": false,
                    "name": "name1",
                    "position": "0-1-1"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "I4xeA4imaUE7xByXCYJ46",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-1-2-0"
                        },
                        {
                            "collapsed": false,
                            "id": "SMPeIFwSU3l66aoB_sDDT",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-1-2-1"
                        },
                        {
                            "collapsed": false,
                            "id": "pKEnPAcEwBBX7xeU_YZ9C",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-1-2-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "PXNUaX4yeBq6CsAejdPq-",
                    "leaf": false,
                    "name": "name2",
                    "position": "0-1-2"
                }
            ],
            "collapsed": false,
            "id": "XfH8t4OnLPXneVFvDTAsX",
            "leaf": false,
            "name": "name:1",
            "position": "0-1"
        },
        {
            "children": [
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "SIJ76gcLw454Nq64cr-cb",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-2-0-0"
                        },
                        {
                            "collapsed": false,
                            "id": "t4DIszPRdg2GjNvlYdr_D",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-2-0-1"
                        },
                        {
                            "collapsed": false,
                            "id": "utAlNg6bmDoc38mX6XUk0",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-2-0-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "h-fJZJWADx488XLMKaqDm",
                    "leaf": false,
                    "name": "name0",
                    "position": "0-2-0"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "dQbDBLh3q_WpGdy1CL2jy",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-2-1-0"
                        },
                        {
                            "collapsed": false,
                            "id": "ZRbOJOus2KTLmw9TIRyvX",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-2-1-1"
                        },
                        {
                            "collapsed": false,
                            "id": "DmqsyNznDjcXqff-Ltj6T",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-2-1-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "Y83B8Lc1Tw2jwlKFG9szg",
                    "leaf": false,
                    "name": "name1",
                    "position": "0-2-1"
                },
                {
                    "children": [
                        {
                            "collapsed": false,
                            "id": "jrz-1loRm3Q1nNbpq6ac9",
                            "leaf": true,
                            "name": "name0",
                            "position": "0-2-2-0"
                        },
                        {
                            "collapsed": false,
                            "id": "4rH8Z3bhG9ARqcj-n4JsH",
                            "leaf": true,
                            "name": "name1",
                            "position": "0-2-2-1"
                        },
                        {
                            "collapsed": false,
                            "id": "JoJ-frjSrJQHHNTsLCll1",
                            "leaf": true,
                            "name": "name2",
                            "position": "0-2-2-2"
                        }
                    ],
                    "collapsed": false,
                    "id": "9D1QMT1Dz6aKTXFCfDLCL",
                    "leaf": false,
                    "name": "name2",
                    "position": "0-2-2"
                }
            ],
            "collapsed": false,
            "id": "17GwpCqapqjCBqPSvjDdN",
            "leaf": false,
            "name": "name:2",
            "position": "0-2"
        }
    ]);
    //右树
    const [rightTree, setRightTree] = useState([
        {
            "children": [
                {
                    "collapsed": false,
                    "id": "M0tryFq5SSntdSGMDOm13",
                    "leaf": true,
                    "name": "name0",
                    "position": "0-0-0"
                },
                {
                    "collapsed": false,
                    "id": "Hw2BjKFzIlJjW0dWPFJL7",
                    "leaf": true,
                    "name": "name1",
                    "position": "0-0-1"
                },
                {
                    "collapsed": false,
                    "id": "57K0jZT8yzmjsuiy4IM2c",
                    "leaf": true,
                    "name": "name2",
                    "position": "0-0-2"
                }
            ],
            "collapsed": false,
            "id": "r7kTpPav4pSM5UKNtO05J",
            "leaf": false,
            "name": "name:0",
            "position": "0-0"
        },
        {
            "children": [
                {
                    "collapsed": false,
                    "id": "6OU7Pw2pGpVp5KguU-yLC",
                    "leaf": true,
                    "name": "name0",
                    "position": "0-1-0"
                },
                {
                    "collapsed": false,
                    "id": "zK-6dneuWoe4ylod5Ne-w",
                    "leaf": true,
                    "name": "name1",
                    "position": "0-1-1"
                },
                {
                    "collapsed": false,
                    "id": "WN9fcXpIiMJCMsolxPm8D",
                    "leaf": true,
                    "name": "name2",
                    "position": "0-1-2"
                }
            ],
            "collapsed": false,
            "id": "oFDmKa4UlmnskVYwnm9_T",
            "leaf": false,
            "name": "name:1",
            "position": "0-1"
        },
        {
            "children": [
                {
                    "collapsed": false,
                    "id": "HE2uD4pbQykcGqm4qZbE0",
                    "leaf": true,
                    "name": "name0",
                    "position": "0-2-0"
                },
                {
                    "collapsed": false,
                    "id": "ZT894E0WJXjyEWBXQUVW7",
                    "leaf": true,
                    "name": "name1",
                    "position": "0-2-1"
                },
                {
                    "collapsed": false,
                    "id": "T6Or1m5HDMPttzE95am54",
                    "leaf": true,
                    "name": "name2",
                    "position": "0-2-2"
                }
            ],
            "collapsed": false,
            "id": "UVwPQiuj2c2wvbsiGGpKL",
            "leaf": false,
            "name": "name:2",
            "position": "0-2"
        }
    ]);
    //映射关系
    const [map, setMap] = useState([]);
    //箭头
    const [xarrows, setXarrows] = useState([]);
    //选中状态
    const [selected, setSelected] = useState({});
    const [properties, setProperties] = useState({});

    //重新计算箭头位置
    const initXarrows = (maps) => {
        let newXarrows = [];
        maps.forEach(item => {
            let s = item.start;
            let e = item.end;

            //获取位置
            function getPosition(tree, id) {
                let position;
                for(const t of tree) {
                    if(t.id ===id){
                        position = t.position;
                        break;
                    }
                    function getP(target) {
                        let p;
                        if (target.id === id) {
                            p = target.position;
                        } else if (target.children&&target.children.length > 0) {
                            for (const c of target.children) {
                                p=getP(c)
                                if(p){
                                    break;
                                }
                            }
                        }
                        return p;
                    }
                    position=getP(t);
                    if (position!==undefined) {
                        break;
                    }
                };
                return position;
            }
            const leftPosition = getPosition(leftTree, s);
            const rightPosition = getPosition(rightTree, e);
            //获取箭头位置
            function getArrowPosition(position, tree) {
                let arrowId;
                let isLeaf;
                const indexs = position.split('-');
                let deepTree = tree;
                for (var i = 1; i < indexs.length; i++) {
                    if (deepTree[indexs[i]].collapsed === true) {
                        arrowId = deepTree[indexs[i]].id;
                        isLeaf = deepTree[indexs[i]].leaf;
                        break;
                    } else {
                        if (i === indexs.length - 1) {
                            arrowId = deepTree[indexs[i]].id;
                            isLeaf = deepTree[indexs[i]].leaf;
                        } else {
                            deepTree = deepTree[indexs[i]].children;
                        }
                    }
                }
                return {id:arrowId,isLeaf:isLeaf};
            }

            s = getArrowPosition(leftPosition, leftTree);
            e = getArrowPosition(rightPosition, rightTree);

            newXarrows.push({
                start: s.id,
                end: e.id,
                isLeaf:s.isLeaf&&e.isLeaf
            });
        });
        setXarrows(newXarrows);
        updateXarrow();
    }
    useEffect(() => {
        initXarrows(map);
    }, []);
    const updateXarrow = useXarrow();

    const XarrowDiv = ({ xarrow }) => {
        const [state, setState] = useState({
            color: 'gray',
        });
        const defProps = {
            passProps: {
                className: 'xarrow',
                onMouseEnter: () => setState({ color: 'IndianRed' }),
                onMouseLeave: () => setState({ color: 'gray' }),
                onClick: (e) => {
                    e.stopPropagation(); //so only the click event on the box will fire on not on the container itself
                    if (!xarrow.isLeaf) {
                        return;
                    }
                    let properties;
                    map.forEach(item => {
                        if (item.start == xarrow.start && item.end == xarrow.end) {
                            properties = { ...item.property };
                        }
                    })
                    setSelected({ start: xarrow.start, end: xarrow.end });
                    setProperties(properties);
                },
                cursor: 'pointer',
            },
        };
        let color = state.color;
        let headSize = 4;
        const zIndex = 0;
        if (selected && selected.start === xarrow.start && selected.end === xarrow.end)
            color = 'red';
        return (
            <Xarrow {...{ ...defProps, headSize, color, ...xarrow,zIndex }} />
        );
    }
    const TreeNode = ({ id, position, name, children, leaf, collapsed, side }) => {
        const clickRoot = (id, position, side) => {
            let tree = side === 'left' ? leftTree : rightTree;
            let setTree = side === 'left' ? setLeftTree : setRightTree;
            var indexs = position.split('-');
            var p = tree;
            for (var i = 1; i < indexs.length; i++) {
                if (i === indexs.length - 1) {
                    p[parseInt(indexs[i])].collapsed = !p[parseInt(indexs[i])].collapsed;
                } else {
                    p = p[parseInt(indexs[i])].children
                }
            }
            setTree(tree);
            initXarrows(map);
        }
        const dropStart = (event) => {
            event.dataTransfer.setData("dropId", event.target.id);
            event.dataTransfer.setData("dropSide", side);
        }
        const allowDrop = (event) => {
            event.preventDefault();
        }

        const dropItem = (event) => {
            event.preventDefault();
            var dropId = event.dataTransfer.getData("dropId");
            var fromSide = event.dataTransfer.getData("dropSide");

            if (fromSide == side) return;

            if (fromSide === 'left') {
                var start = dropId;
                var end = event.target.id;
            } else {
                var start = event.target.id;
                var end = dropId;
            }

            let isExist = false;
            map.forEach(item => {
                if (item.start === start && item.end === end) {
                    isExist = true;
                }
            });
            if (!isExist) {
                map.push({
                    start: start,
                    end: end,
                    property: {}
                });
                setMap(map);
                initXarrows(map);
            }
        }
        const spaceLeft = (position) => {
            return position.split('-').length;
        }
        return (
            <div >
                {
                    !leaf && id != 'root' &&
                    <div key={id} id={id} className='flex bg-gray-200 bg-opacity-75 p-1 shadow-lg'
                        style={{ paddingLeft: spaceLeft(position) + 'rem' }}>
                        <div onClick={() => clickRoot(id, position, side)} className={collapsed ? "i ic:sharp-arrow-right" : "i ic:twotone-arrow-drop-down"}></div>
                        {name}
                    </div>
                }
                {
                    leaf &&
                    <div key={id} id={id} className='p-1  bg-gray-200 bg-opacity-75 hover:shadow-inner'
                        style={{ paddingLeft: spaceLeft(position) + 2 + 'rem' }}
                        onDragStart={dropStart} onDrop={dropItem} onDragOver={allowDrop} draggable="true">
                        {name}
                    </div>
                }
                {
                    !collapsed && !leaf &&
                    children.map(({ id, position, name, children, leaf, collapsed }) => (
                        <TreeNode key={id} id={id} position={position} name={name} children={children} leaf={leaf} collapsed={collapsed} side={side} />
                    ))
                }
            </div>
        )
    }
    class PropertyDiv extends React.Component {
        constructor(props) {
            super(props);
            this.state = properties;
        }
        changeProperty = (key, event) => {
            map.forEach(item => {
                if (item.start === selected.start && item.end === selected.end) {
                    item.property[key] = event;
                }
            });
            this.setState({ ...this.state, [key]: event });
            setMap(map);
        }
        render() {
            const showP = this.state;
            return (
                <div className={divTailwindcss + " pl-20 flex-col"}>
                    <Input
                        className={'mb-2 w-80'}
                        allowClear
                        value={showP.p1}
                        placeholder='属性1'
                        onChange={(event) => this.changeProperty("p1", event)}
                    />
                    <Input
                        className={'mb-2 w-80'}
                        allowClear
                        value={showP.p2}
                        placeholder='属性2'
                        onChange={(event) => this.changeProperty("p2", event)}
                    />
                    <Input
                        className={'mb-2 w-80'}
                        allowClear
                        value={showP.p3}
                        placeholder='属性3'
                        onChange={(event) => this.changeProperty("p3", event)}
                    />
                    <AceEditor
                        width='20rem'
                        mode="java"
                        theme="github"
                        name="UNIQUE_ID_OF_DIV"
                        value={showP.p4}
                        onChange={(event) => this.changeProperty("p4", event)}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
            )
        }
    }
    const divTailwindcss = "basis-1/3 m-0 h-50 flex justify-center overflow-auto";
    return (
        <div className="flex flex-row" >
            <Xwrapper>
                <div className={divTailwindcss + " tree-list "} onScroll={updateXarrow}>
                    <div className="flex flex-col text-3xl w-80 ">
                        <TreeNode id="root" position={"0"} name="根" children={leftTree} isLeaf={false} isCollapsed={false} side="left" />
                    </div>
                </div>
                <div className={divTailwindcss + " tree-list "} onScroll={updateXarrow}>
                    <div className="flex flex-col text-3xl w-80">
                        <TreeNode id="root" position={"0"} name="根" children={rightTree} isLeaf={false} isCollapsed={false} side="right" />
                    </div>
                </div>
                <PropertyDiv key="propertydiv"
                />
                {xarrows.map((xarrow, index) =>
                    <XarrowDiv key={index}
                        xarrow={xarrow} />
                )}
            </Xwrapper>
        </div>
    )
}