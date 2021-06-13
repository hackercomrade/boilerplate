//
var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var World = Matter.World;
var Runner = Matter.Runner;
var Render = Matter.Render;
var Composite = Matter.Composite;
var Composites = Matter.Composites;
var Constraint = Matter.MouseConstraint;
var Common = Matter.Common;
var Mouse = Matter.Mouse;
//
var engine, world; 
var render, runner;
var composite, composites, constraint, common;
var mouse;
var stack;
var offset, options;
//
engine = Engine.create();
world = engine.world;
render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        height: 657,
        width: 1366,
        wireframes: false,
        backgroundColor: "black",
        showAngleIndicator: false
    }
})
Render.run(render);
runner = Runner.create();
Runner.run(runner, engine);
//
offset = 10;
options = {
    isStatic: true,
};
world.bodies = [];
//
Composite.add(world, [
    Bodies.rectangle(500, -offset, 1750+2*offset, 50, options),
    Bodies.rectangle(202, 622+offset, 2308+2*offset, 50, options),
    Bodies.rectangle(0+offset, 97, 20, 1000+2*offset, options),
    Bodies.rectangle(1346+offset, 97, 20, 1000+2*offset, options),
])
stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x,y){
    if(Common.random()>0.40){
        return Bodies.rectangle(x, y, 10, 10,{
            
            render: {
                strokeStyle: "red",
                sprite: {
                    texture: "/images/pencil.png"
                }
            }
        })
    }
    else{
        return Bodies.circle(x, y, 5, {
            density: 0.1,
            frictionAir: 0.1,
            restitution: 0.1,
            friction: 0.1,
            render: {
                sprite: {
                    texture: "/images/eraser.png"
                }
            }
        })
    }
})
Composite.add(world, stack)