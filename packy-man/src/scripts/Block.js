class Block {
    constructor(block, x) {
        this.blockName = block;
        this.properties = (() => {
            let type = block.toLowerCase();
            let properties;
            switch (type) {
                case "bott":
                    properties = {
                        a: "open",
                        b: "closed",
                        c: "open",
                        d: "open",
                    }; 
                    break;
                case "ltc":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "open",
                        d: "open",
                    }; 
                    break;
                case "fw":
                    properties = {
                        a: "open",
                        b: "open",
                        c: "open",
                        d: "open",
                    };
                    break;
                case "lbc":
                    properties = {
                        a: "closed",
                        b: "open",
                        c: "open",
                        d: "closed",
                    };
                    break;
                case "blocksv":
                    properties = {
                        a: "closed",
                        b: "open",
                        c: "closed",
                        d: "open",
                    };
                    break;
                case "blocksh":
                    properties = {
                        a: "open",
                        b: "closed",
                        c: "open",
                        d: "closed",
                    };
                    break;
                case "empty":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "rbc":
                    properties = {
                        a: "open",
                        b: "open",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "rtc":
                    properties = {
                        a: "open",
                        b: "closed",
                        c: "closed",
                        d: "open",
                    };
                    break;
                case "topt":
                    properties = {
                        a: "open",
                        b: "open",
                        c: "open",
                        d: "closed",
                    };
                    break;
                case "leftt":
                    properties = {
                        a: "closed",
                        b: "open",
                        c: "open",
                        d: "open",
                    };
                    break;
                case "rightt":
                    properties = {
                        a: "open",
                        b: "open",
                        c: "closed",
                        d: "open",
                    };
                    break;
                case "topde":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "closed",
                        d: "open",
                    };
                    break;
                case "rightde":
                    properties = {
                        a: "open",
                        b: "closed",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "bottde":
                    properties = {
                        a: "closed",
                        b: "open",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "leftde":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "open",
                        d: "closed",
                    };
                    break;
                case "horizbord":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "vertbord":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "cornbord":
                    properties = {
                        a: "closed",
                        b: "closed",
                        c: "closed",
                        d: "closed",
                    };
                    break;
                case "unchosen":
                    properties = {
                        a: "both",
                        b: "both",
                        c: "both",
                        d: "both",
                    };
                    break;

                default:
                    console.log(`Not block found`);
            }
            return properties;
        })();
        this.bin = (() => {
            let type = block.toLowerCase();
            let bin;
            switch (type) {
                case "bott":
                    bin = "1110";
                    break;
                case "ltc":
                    bin= "0011";
                    break;
                case "fw":
                   bin= "1111";
                    break;
                case "lbc":
                   bin="0110";
                    break;
                case "blocksv":
                    bin = "0101";
                    break;
                case "blocksh":
                    bin = "1010";
                    break;
                case "empty":
                    bin = "0000";
                    break;
                case "rbc":
                    bin = "1100";
                    break;
                case "rtc":
                    bin = "1001";
                    break;
                case "topt":
                    bin = "1011";
                    break;
                case "leftt":
                    bin= "0111";
                    break;
                case "rightt":
                    bin = "1101";
                    break;
                case "topde":
                    bin = "0001";
                    break;
                case "rightde":
                    bin = "1000";
                    break;
                case "bottde":
                    bin = "0100";
                    break;
                case "leftde":
                    bin = "0010";
                    break;
                case "horizbord":
                    bin = "0000";
                    break;
                case "vertbord":
                    bin = "0000";
                    break;
                case "cornbord":
                    bin = "0000";
                    break;
                case "unchosen":
                    bin = "10000";
                    break;
                default:
                    console.log(`Not block found`);
            }
            return bin;
        })();
        this.type = this.blockName.toLowerCase();
        this.yCenter = -3.5 + Math.floor(x / 11) * 10;
        this.xCenter = -3.5 + (x % 11) * 10;
        this.x = x;
    }
}

export default Block;