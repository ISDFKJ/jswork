(function(window,document,$){
    function Game2048(opt) {
        var prefix = opt.prefix, len = opt.len ,size = opt.size,margin = opt.margin;
        var score = 0;
        var winNum = 2048;
        var isGameOVer = true;
        var board = new Borad(len);
        var view = new View(prefix,len,size,margin);
        var user = opt.user
        var url = 'http://139.9.81.203:8090/gameReord/g2048'
        view.init();
        board.onGenerate = function(e) {
            view.addNum(e.x , e.y,e.num);
        };
        board.onMove = function(e) {
            if(e.to.num >= winNum) {
                isGameOver = true;
                setTimeout(function(){view.win();}, 300);
        }
        if(e.to.num >e.from.num){
            score += e.to.num;
            view.updateScore(score);
        }
        view.move(e.from, e.to);
    };
    board.onMoveComplete = function(e) {
        if(!board.canMove()){
            isGameOver = true;
            //setTimeout(function() {view.over(score);},300);
            board.ranklist(url,user,score,view)
        }
        if(e.moved){
            setTimeout(function(){board.generate();}, 200);
        }
    };

    $(document).keydown(function(e) {
        if(isGameOver) {
            return false;
        }
        switch (e.which) {
            case 37: board.moverleft(); break;
            case 38: board.moveUp();    break;
            case 39: board.moveRight();  break;
            case 40: board.moveDown();  break;
        }
    });
    function start() {
        score = 0;
        view.updateScore(0);
        view.cleanNum();
        board.init();
        board.generate();
        board.generate();
        isGameOver = false;
    }
    $('#' + prefix + '_restart').click(start);
    start();
}