import React from 'react';
import { WALL_COLOUR } from '../../constantsGame';
import LinesWall from '../../grid/LinesWall/';
import walls from './walls.json';

export default function Walls(props) {
    const lineProps = {
        strokeWidth: 1,
        stroke: WALL_COLOUR,
        fill: 'none'
    };

    const linesWalls = Object.keys(walls).map(key => {
        const parts = walls[key].parts.map(([distance, direction, radius]) => ({ distance, direction, radius }));

        return (
            <LinesWall key={key} {...props} {...lineProps}
                start={walls[key].start} parts={parts} />
        );
    });

    return (
        <g className="walls">
            {linesWalls}
        </g>
    );
}