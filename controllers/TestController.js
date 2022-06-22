class TestController {
    constructor(req, res){
        this.req = req;
        this.res = res;
    }
    get(){
        return {
            status:200,
            message:'SUCCESSFULLY REQUEST DATA',
            data:{}
        };
    }

    detail(){
        const param = this.req.params;
        return {
            status:200,
            message:'SUCCESSFULLY REQUEST DATA',
            data:param
        };
    }
}

module.exports = TestController;