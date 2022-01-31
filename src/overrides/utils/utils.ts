export type Modify<T, R> = Omit<T, keyof R> & R;

export const ThreeStripesColorNames = {
    FullBlack: '900',
    Black50: '500',
    Black20: '300',
    DarkGray: '800',
    LightGray: '200',
    LightGray50: '100'
}