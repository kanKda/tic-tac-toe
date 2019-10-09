class TicTacToe {
    constructor() {
        this.matrix = [['','',''],['','',''],['','','']];
        this.currentSymbol = 'x';
        this.turn = 1;
        this.finished = false;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] != '') {
            return null;
        }
        this.matrix[rowIndex][columnIndex] = this.currentSymbol;
        this.turn += 1;

        if (this.matrix[0].join('').split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        } else if(this.matrix[1].join('').split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        } else if (this.matrix[2].join('').split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }
        let tmp = this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0];
        if (tmp.split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }
        tmp = this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1];
        if (tmp.split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }
        tmp = this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2];
        if (tmp.split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }
        tmp = this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2];
        if (tmp.split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }
        tmp = this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0];
        if (tmp.split(this.currentSymbol).length - 1 == 3) {
            this.winner = this.currentSymbol;
            this.finished = true;
        }

        if (this.turn % 2 == 1) {
            this.currentSymbol = 'x';
        } else {
            this.currentSymbol = 'o';
        }
        if (this.turn == 10){
            this.finished = true;
        }
    }

    isFinished() {
        return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        let fields = this.matrix[0].join('') + this.matrix[1].join('') + this.matrix[2].join('');
        if (fields.length != 9) {
            return false;
        } else {
            return true;
        }
    }

    isDraw() {
        if (this.finished == false) {
            return false;
        } else if (this.finished == true && this.winner == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] == '') {
            return null;
        } else {
            return this.matrix[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
