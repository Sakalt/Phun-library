export class FunNumber {
    toFunNumber(input: number) {
        const numbers = ["零","一","二","三","四","五","六","七","八","九"]
        return input.toString(10).split("").map(n => numbers[Number(n)]).join("")
    }
    toFunNumberbase12(input: number) {
        const numbers = ["零","一","二","三","四","五","六","七","八","九","甲","乙"]
        return input.toString(12).split("").map(n => numbers[parseInt(n, 12)]).join("")
    }
    replacePhunNumber(input: string) {
        const PhunNum: any = {
            "0": "〇",
            "1": "〡",
            "2": "〢",
            "3": "〣",
            "4": "〤",
            "5": "〥",
            "6": "〦",
            "7": "〧",
            "8": "〨",
            "9": "〩",
            "a": "〹",
            "b": "〺",
            ".": "・",
        }
        return input.split("").map(n => {return PhunNum[n]}).join("")
    }

    toPhunCalcNum (input: number) {
        const PhunNum: any = {
            "0": "〇",
            "1": "〡",
            "2": "〢",
            "3": "〣",
            "4": "〤",
            "5": "〥",
            "6": "〦",
            "7": "〧",
            "8": "〨",
            "9": "〩",
            "a": "〹",
            "b": "〺",
            ".": "・",
        }
        return input.toString(12).split("").map(n => {return PhunNum[n]}).join("")
    }
}