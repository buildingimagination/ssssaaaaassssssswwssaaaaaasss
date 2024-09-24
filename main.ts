namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b . . . . . . . . . . 
        . . . b b d b b . . . . . . . . 
        . . . b d 1 1 1 b . . . . . . . 
        . . . . b b 1 d d b . . . . . . 
        . . . . . b b d d b b . . . . . 
        . . . . . . . b d d d b . . . . 
        . . . . . . . . b d d d b . . . 
        . . . . . . . . . b d d d b b . 
        . . . . . . . . . . b b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
    . . . . 1 f 1 1 1 1 . c . . . . 
    b f f . 1 f 1 1 1 1 c . . . b . 
    b . f f 1 f 1 1 1 c 1 . . b . . 
    . b f . f f f 1 c 1 1 . b . . . 
    . . b f 1 2 1 c 2 f f b . . . . 
    . . b . f f c 1 1 f b f f . . . 
    . . . b 1 c f 1 f b 1 . f 1 1 . 
    1 . . b c 2 f f 1 2 1 . . . 1 1 
    1 1 1 c b f 2 b 2 1 1 1 f 1 1 1 
    . . c . 1 b b 2 1 f f f f . . . 
    . c . f f b 1 f f f f f f f . . 
    c 1 f . b 1 b f f f f 1 . . . . 
    1 f f b 1 1 1 b f f f f . . . . 
    f 1 b f 1 1 f b 1 f f . f . . . 
    1 b . . 1 1 f . b f . . 1 1 . . 
    b 1 . 1 1 . f f f 1 1 1 . 1 1 1 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f . . . f f f f . . . 
    . . f f f f . . . f f f f . . . 
    . . f f f f . . . f f f f . . . 
    . . f 5 5 f . . . f 5 5 f . . . 
    . . f 5 5 f . . . f 5 5 f . . . 
    . . f 5 5 f f f f f 5 5 f . . . 
    . . f 5 5 f f f f f 5 5 f . . . 
    . . f 5 5 5 5 5 5 5 5 5 f . . . 
    . . f 5 f 5 5 5 5 f 5 5 f . . . 
    . . f 2 5 5 f 5 5 5 5 2 f . . . 
    . . f 2 5 f f f 5 5 5 2 f . . . 
    . . f 5 5 5 2 5 5 5 5 5 f . . . 
    . . f 5 5 f 5 5 5 5 f 5 f . . . 
    . . f f f f 5 5 5 5 f f f . . . 
    . . f f f f f f f f f f f . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffff777777777777777333333333333333333333337ffffffffffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333373333
    ffffffffffffffffffffffffffffffff77722222222222222277733333333333333333337fffffffffffffffffffffffffffffffffffffffffff77333333333333333333333333333333333333337333
    fffffffffffffffffffffffffffff77722222222222222222222277733333333333333337ffffffffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333337333
    fffffffffffffffffffffffffff7722222222222222222222222222277333333333333337ffffffffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333337333
    ffffffffffffffffffffffffff72222222222222222222222222222222733333333333337fffffffffffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333337333
    ffffffffffffffffffffffff772222222222222222222222222222222227733333333337fffffffffffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333733
    fffffffffffffffffffffff7222222222222222222222222222222222222273333333337ffffffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333733
    ffffffffffffffffffffff72222222222222222222222222222222222222227333333337fffffffffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333733
    fffffffffffffffffffff722222222222222222222222222222222222222222733333337fffffffffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333733
    ffffffffffffffffffff7222222222222222222222222222222222222222222273333337ffffffffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333733
    fffffffffffffffffff72222222222222222222222222222222222222222222227333337fffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333733
    fffffffffff7777777777777777722222222222222222222222222222222222222733337fffffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333733
    fffffff77773333337444444444477772222222222222222222222222222222222273337ffffffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333333733
    ffff77733333333337444444444444447772222222222222222222222222222222273337ffffffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333333733
    ff7733333333333374444444444444444447722222222222222222222222222222227337fffffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333733
    773333333333333744444444444444444444477222222222222222222222222222222737fffffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333733
    333333333333333744444444444444444444444772222222222222222222222222222737ffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333733
    333333333333337444444444444444444444444447222222222222222222222222222277ffffffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333733
    333333333333337444444444444444444444444444772222222222222222222222222277fffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333333333733
    333333333333337444444444444444444444444444447222222222222222222222222277fffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333333333733
    333333333333374444444444444444444444444444444722222222222222222222222227fffffffffffffffffffffffffffffffff7333333333333333333333333333333333333333333333333333733
    333333333333374444444444444444444444444444444472222222222222222222222227ffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333333733
    333333333333374444444444444444444444444444444447222222222222222222222227ffffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333333733
    3333333333337444444444444444444444444444444444447222222222222222222222277fffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333333733
    3333333333337444444444444444444444444444444444444722222222222222222222227fffffffffffffffffffffffffffffff73333333333333333333333333333333333333333333333333337333
    3333333333337444444444444444444444444444444444444472222222222222222222227ffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333337333
    3333333333337444444444444444444444444444444444444447222222222222222222227ffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333337333
    3333333333337444444444444444444444444444444444444447222222222222222222227ffffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333337333
    33333333333374444444444444444444444444444444444444447222222222222222222277fffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333373333
    33333333333374444444444444444444444444444444444444444722222222222222222277fffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333373333
    3333333333337444444444444444444444444444444444444444472222222222222222227.7ffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333733333
    3333333333337444444444444444444444444444444444444444447222222222222222227.7ffffffffffffffffffffffffffff733333333333333333333333333333333333333333333333333733333
    33333333333374444444444444444444444444444444444444444472222222222222227777777777777777777ffffffffffffff733333333333333333333333333333333333333333333333333733333
    3333333333337444444444444444444444444444444444444444444722222222222777ee7dd7bbbbbbbbbbbbb777fffffffffff733333333333333333377777777777777777773333333333337333333
    3333333333337444444444444444444444444444444444444444444722222222777eeeee7dd7bbbbbbbbbbbbbbbb777ffffffff733333333333333777799999999999999999997777333333337333333
    3333333333337444444444444444444444444444444444444444444472222277eeeeeeee7ddd7bbbbbbbbbbbbbbbbbb77ffffff733333333333777999999999999999999999999999777333373333333
    33333333333374444444444444444444444444444444444444444444722277eeeeeeeeee7ddd7bbbbbbbbbbbbbbbbbbbb77ffff733333333377999999999999999999999999999999999773373333333
    333333333333744444444444444444444444444444444444444444447277eeeeeeeeeeee7dddd7bbbbbbbbbbbbbbbbbbbbb77ff733333337799999999999999999999999999399999999997733333333
    3333333333333744444444444444444444444444444444444444444447eeeeeeeeeeeee7dddddd7bbbbbbbbbbbbbbbbbbbbbb7f733333779999999999999999999999999999999999999997377333333
    3333333333333744444444444444444444444444444444444444444777eeeeeeeeeeeee7dddddd7bbbbbbbbbbbbbbbbbbbbbbb7733377999999999999999999999999999999999999999997333773333
    3333333333333744444444444444444444444444444444444444447ff7eeeeeeeeeeeee7ddddddd7bbbbbbbbbbbbbbbbbbbbbbb773799999999999999999999999999999999999999999973333337333
    333333333333337444444444444444444444444444444444444447fff7eeeeeeeeeeee7ddddddddd7bbbbbbbbbbbbbbbbbbbbbb777999999999999999999999999999999999999999999733333333773
    33333333333333744444444444444444444444444444444444447fffff7eeeeeeeeeee7dddddddddd7bbbbbbbbbbbbbbbbbbbbb7ff799999999999999999999999999999999999999997333333333337
    3333333333333374444444444444444444444444444444444447ffffff7eeeeeeeeeee7dddddddddd7bbbbbbbbbbbbbbbbbbbb77fff79999999999999999999999999999999999999997333333333333
    333333333333333744444444444444444444444444444444447fffffff7eeeeeeeeee7dddddddddddd7bbbbbbbbbbbbbbbbbb7997fff7999999999999999999999999999999999999973333333333333
    33333333333333374444444444444444444444444444444447ffffffff7eeeeeeeeee7ddddddddddddd7bbbbbbbbbbbbbbb779997ffff799999999999999999999999999999999999733333333333333
    3333333333333333744444444444444444444444444444447fffffffff7eeeeeeeee7ddddddddddddddd7bbbbbbbbbbbbb7999997fffff79999999999999999999999999999999997333333333333333
    333333333333333337444444444444444444444444444447ffffffffff7eeeeeeee7ddddddddddddddddd77bbbbbbbbbbb7999997ffffff7999999999999999999999999999999773333333333333333
    33333333333333333744444444444444444444444444447fffffffffff7eeeeeeee7ddddddddddddddddddd7bbbbbbbbb799999997ffffff799999999999999999999999999997333333333333333333
    33333333333333333374444444444444444444444444447fffffffffff7eeeeeee7ddddddddddddddddddddd7bbbbbbb7999999997ffffff799999999999999999999999999973333333333333333333
    3333333333333333333744444444444444444444444447ffffffffffff7eeeeee7ddddddddddddddddddddddd77bbbb79999999997fffffff79999999999999999999999997733333333333333333333
    333333333333333333337444444444444444444444447fffffffffffff7eeeee7dddddddddddddddddddddddddd7bb7999999999997fffffff7999999999999999999999973333333333333333333333
    333333333333333333333744444444444444444444447fffffffffffff7eeee7dddddddddddddddddddddddddddd777999999999997fffffff7999999999999999999997733333333333333333333333
    33333333333333333333337444444444444444444447ffffffffffffff7eee7dddddddddddddddddddddddddddddd777999999999997fffffff799999999999999999773333333333333333333333333
    33333333333333333333337777777777777777744447ffffffffffffff7ee7dddddddddddddddddddddddddddddd7999777999999997fffffff799999999999999777333333333333333333333333333
    3333333333333333333777ee7799999999999997777fffffffffffffff777ddddddddddddddddddddddddddddddd79999997799999997fffffff79999999999977333333333333333333333333333333
    3333333333333333777eeeeeee7999999999999999777fffffffffffff7dddddddddddddddddddddddddddddddd799999999977779997fffffff79999999777733333333333333333333333333333333
    3333333333333377eeeeeeeeeee779999999999997aaa77fffffffff777dddddddddddddddddddddddddddddddd799999999999997777777777777777777333333333333333333333333333333333333
    33333333333377eeeeeeeeeeeeeee7779999999997aaaaa77ffff777337ddddddddddddddddddddddddddddddd79999999999999999997fffffff7333333333333333333333333333333333333333333
    333333333337eeeeeeeeeeeeeeeeeeee7779999997aaaaaaa777733337dddddddddddddddddddddddddddddddd799999999999999999997ffffff7333333333333333333333333333333333333333333
    33333333377eeeeeeeeeeeeeeeeeeeeeeee77777777777777777333337ddddddddddddddddddddddddddddddd79999999999999999999997ffffff733333333333333333333333333333333333333333
    333333337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaa733337ddddddddddddddddddddddddddddddd79999999999999999999997ffffff733333333333333333333333333333333333333333
    33333337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaa73337dddddddddddddddddddddddddddddd7999999999999999999999997fffff733333333333333333333333333333333333333333
    3333337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaa737ddddddddddddddddddddddddddddddd79999999999999999999999997fffff73333333333333333333333333333333333333333
    333337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaaa77ddddddddddddddddd3ddddddddddddd799999999999999999999999997ffff73333333333333333333333333333333333333333
    33337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaaaa7dddddddddddddddddddddddddddddd79999999999999999999999999997fff73333333333333333333333333333333333333333
    3337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaaa757ddddddddddddddddddddddddddddd79999999999999999999999999997fff73333333333333333333333333333333333333333
    337eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaaa7557dddddddddddddddddddddddddddd7999999999999999999999999999977f73333333333333333333333333333333333333333
    37eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaa755557ddddddddddddddddddddddddddd7999999999999999999999999999999773333333333333333333333333333333333333333
    37eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaaa755557dddddddddddddddddddddddddd79999999999999999999999999999999973333333333333333333333333333333333333333
    7eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaa75555557ddddddddddddddddddddddddd79999999999999999999999999999999977333333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaaa755555557dddddddddddddddddddddddd79999999999999999999999999999999973773333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaaa7555555557dddddddddddddddddddddddd79999999999999999999999999999999973337333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaa755555555557ddddddddddddddddddddddd79999999999999999999999999999999973333773333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaaa755555555557ddddddddddddddddddddddd79999999999999999999999999999999973333337733333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaaa75555555555557dddddddddddddddddddddd79999999999999999999999999999999973333333377333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaaa755555555555557dddddddddddddddddddddd79999999999999999999999999999999973333333333773333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaaa7555555555555557dddddddddddddddddddddd79999999999999999999999999999999973333333333337773333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaaa755555555555555557ddddddddddddddddddddd79999999999999999999999999999999973333333333333337777333333333333333333377
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaaa7555555555555555557ddddddddddddddddddddd79999999999999999999999999999999973333333333333333333777777777777777777733
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaaa75555555555555555557ddddddddddddddddddddd79999999999999999999999999999999973333333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7aaaa7555555555555555555557dddddddddddddddddddd79999999999999999999999999999999973333333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7a775555555555555555555557dddddddddddddddddddd79999999999999999999999999999999733333333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77555555555555555555555557dddddddddddddddddddd79999999999999999999999999999999733333333333333333333333333333333333333333
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee775555555555555555555555557dddddddddddddddddddd79999999999999999999999999999999733333333333333333333333333333333333333333
    77eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77447555555555555555555555557dddddddddddddddddddd79999999999999999999999999999997333333333333333333333333333333333333333333
    4477eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7744447555555555555555555555557dddddddddddddddddddd79999999999999999999999999999997333333333333333333333333333333333333333333
    4444777eeeeeeeeeeeeeeeeeeeeeeeee7774444447555555555555555555555557dddddddddddddddddddd79999999999999999999999999999997333333333333333333333333333333333333333333
    44444447777eeeeeeeeeeeeeeeee77774444444444755555555555555555555557ddddddddddddddddddddd7999999999999999999999999999973333333333333333333333333333333333333333333
    444444444447777777777777777744444444444444755555555555555555555557ddddddddddddddddddddd7999999999999999999999999999973333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444475555555555555555555557ddddddddddddddddddddd7999999999999999999999999999733333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444475555555555555555555557ddddddddddddddddddddd7999999999999999999999999999733333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444447555555555555555555557dddddddddddddddddddddd799999999999999999999999997333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444447555555555555555555557dddddddddddddddddddddd799999999999999999999999997333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444755555555555555555557dddddddddddddddddddddd799999999999999999999999973333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444475555555555555555557ddddddddddddddddddddddd79999999999999999999999733333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444475555555555555555557ddddddddddddddddddddddd79999999999999999999999733333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444447555555555555555557dddddddddddddddddddddddd7999999999999999999997333333333333333333333333333333333333333333333333
    44444444444444444444444444444444444444444444444475555555555555557ddddddddddddddddddddddddd7999999999999999999973333333333333333333333333333333333333333333333333
    44444444444444444444444444444444444444444444444447555555555555557dddddddddddddddddddddddddd799999999999999999733333333333333333333333333333333333333333333333333
    44444444444444444444444444444444444444444444444444755555555555557dddddddddddddddddddddddddd799999999999999997333333333333333333333333333333333333333333333333333
    4444444444444444444444444444444444444444444444444447555555555557dddddddddddddddddddddddddddd79999999999999973333333333333333333333333333333333333333333333333333
    4444444444444444444444444444444444444444444444444444755555555557dddddddddddddddddddddddddddd79999999999999733333333333333333333333333333333333333333333333333333
    4444444444444444444444444444444444444444444444444444475555555557ddddddddddddddddddddddddddddd7999999999997333333333333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444444444444755555557ddddddddddddddddddddddddddddddd799999999973333333333333333333333333333333333333333333333333333333
    444444444444444444444444444444444444444444444444444444477555557ddddddddddddddddddddddddddddddd799999997733333333333333333333333333333333333333333333333333333333
    44444444444444444444444444444444444444444444444444444444475557ddddddddddddddddddddddddddddddddd79999973333333333333333333333333333333333333333333333333333333333
    44444444444444444444444444444444444444444444444444444444447757dddddddddddddddddddddddddddddddddd7997733333333333333333333333333333333333333333333333333333333333
    74444444444444444444444444444444444444444444444444444444444477ddddddddddddddddddddddddddddddddddd773333333333333333333333333333333333333333333333333333333333333
    d74444444444444444444444444444444444444444444444444444444447aa77ddddddddddddddddddddddddddddddd77a73333333333333333333333333333333333333333333333333333333333333
    d74444444444444444444444444444444444444444444444444444444447aaaa777ddddddddddddddddddddddddd777aaa73333333333333333333333333333333333333333333333333333333333333
    dd744444444444444444444444444444444444444444444444444444447aaaaaaaa777ddddddddddddddddddd777aaaaaaa7733333333333333333333333333333333333333333333333333333333333
    ddd7444444444444444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa73333333333333333333333333333333333333333333333333333333333
    dddd74444444444444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7333333333333333333333333333333333333333333333333333333333
    ddddd744444444444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa733333333333333333333333333333333333333333333333333333337
    dddddd7444444444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7733333333333333333333333333333333333333333333333333377.
    ddddddd74444444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa733333333333333333333333333333333333333333333333337...
    dddddddd744444444444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7733333333333333333333333333333333333333333333377....
    ddddddddd7744444444444444444444444444444444444444477aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa773333333333333333333333333333333333333333377......
    ddddddddddd744444444444444444444444444444444444447aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77333333333333333333333333333333333333377........
    `)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.setLife(3)
info.changeLifeBy(-1)
if (game.ask("I have to get my car please ")) {
	
} else {
    game.showLongText("What the heck ", DialogLayout.Bottom)
}
game.splash("Help help help")
mySprite.setPosition(0, 5)
music.play(music.createSong(hex`00f4010408030900001c00010a006400f4016400000400000000000000000000000000050000042d00200024000b1b1d1e2022242527292a2c28002c00081b1d1e202224252930003200041e24272a38003a00021e2201001c000f05001202c102c201000405002800000064002800031400060200042f00000004000c191b1d1e2022242527292a2c08000c000c191b1d1e2022242527292a2c3000320002222932003400012402001c000c960064006d019001000478002c010000640032000000000a0600051a0018001c000b191b1d1e2022242527292a30003200051d1e25272a03001c0001dc00690000045e01000400000000000000000000056400010400031000100014000b191b1d1e2022242527292a05001c000f0a006400f4010a0000040000000000000000000000000000000002120008000c00051e2224272a28002c0003272a2c06001c00010a006400f401640000040000000000000000000000000000000002130000000400051e2024272a08000c00041e22252907001c00020a006400f4016400000400000000000000000000000000000000032c00200024000c191b1d1e2022242527292a2c2e003000022a2c30003200051b2022252938003a0005191d24272a08001c000e050046006603320000040a002d00000064001400013200020100021d0010001400061d1e2224272928002c00031d222530003200051b1e20272c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800350010001100080203040506070809180019000b000102030405060708090a28002900020406400041000c000102030405060708090a0b`), music.PlaybackMode.UntilDone)
game.showLongText("I am going to kill you instead ", DialogLayout.Bottom)
