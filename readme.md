# CSP Compliant Animations

Many element-based libraries (looking at you, framer motion) are modifying style attributes on the element directly, leading to CSP errors.

Using the power of [animate.css](https://animate.style/) and [pure-lit](https://pure-lit.org), this library provides a number of animations to use in a rather safe (yet still somewhat annoying) way.

## Usage

| attribute | values | description |
| - | - | - |
| name | string | name for the context group this animation belongs to. can be used ie for restarting animations |
| animation | [animate.css](https://animate.style/) type | defines the animation to use | 
| repeat | number or infinite | how often to repeat. You can use infinite, but you probably don't want to | 
| duration | unit | how long should this torment your users? |
| delay | unit | how long to wait before tormenting your users? |

```html
    <animated-element 
        name="schedule"
        animation='bounce' 
        repeat="1" 
        duration="2s"
        delay="2s"
    >
        <div>Element to animate</div>
    </animated-element>
```