// Ellipse equation: 4x^2 + y^2 = 100
//                   (x^2)/(5^2) + (y^2)/(10^2) = 1
// Width: 5, Height: 10

// Ellipse dimensions
const height = 10
const width = 5

// Ellipse formulae
const ellipseEquation = math.compile('(x^2)/(5^2) + (y^2)/(10^2)')
const ellipseSlope = math.compile('(-4*x)/y')
const ellipseNormal = math.compile('y/(4*x)')

// Helper formulae
const intersectEquation = math.compile('((a^2)*(m^2) + b^2)*(x^2) + (2*(a^2)*m*c)*x + (a^2 * (c^2 - b^2))')

// Laser configuration (defaulting to Euler Prob 144 specification)
const openingRadius = 0.01
const initialB = height + 0.1
const initialM = -19.7/1.4
const laserOrigin = {
    x: 0,
    y: 10.1
}

// Reflection configuration and lines
const reflectionDepth = 10
lines = []

// 
// Calculation Functions
//
function pointsOfIntersect() {
    // Need to find a good way to solve line-ellipse intersection
}

function pointsToLine(p1, p2) {
    return {
        m: (p2.y - p1.y) / (p2.x - p1.x)
        // c: ...
    }
}

function buildLines() {

    let depth = 1

    while (depth < reflectionDepth) {
        console.log(depth)
        depth += 1
    }
}

// 
// Rendering Functions
// 
function setup() {
    frameRate(60)
    setAttributes('antialias', true);

    createCanvas(windowWidth, windowHeight);

    buildLines()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51)

    // Position the origin at the center and orient the axes correctly
    translate(windowWidth/2, windowHeight/2)
    rotate(PI)
    scale(15, 15)

    // Draw the ellipse
    stroke(255, 255, 255)
    noFill()
    strokeWeight(0.05)
    ellipse(0, 0, 2*width, 2*height)

    // Draw the laser opening
    stroke(51)
    fill(51)
    square(0, height, 2 * openingRadius)

    // Draw a line
    stroke('red')
    noFill()
    line(laserOrigin.x, laserOrigin.y, -1 * 1.4, -9.6)
}