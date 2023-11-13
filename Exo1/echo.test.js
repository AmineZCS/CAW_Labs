const {exf} = require('./echo');

describe('exf tests', () => {
    test('exf("echo", 5) should print "echo" 5 times', () => {
        const spy = jest.spyOn(console, 'log');
        exf("echo", 5);
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenCalledWith("echo");
        spy.mockRestore();
    }
    );
    test('exf("echo", 0) should print "Error: n must be a positive integer"', () => {
        const spy = jest.spyOn(console, 'log');
        exf("echo", 0);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Error: n must be a positive integer");
        spy.mockRestore();
    }
    );
    test('exf("echo", -1) should print "Error: n must be a positive integer"', () => {
        const spy = jest.spyOn(console, 'log');
        exf("echo", -1);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Error: n must be a positive integer");
        spy.mockRestore();
    }
    );
    test('exf("echo", NaN) should print "Error: n must be a positive integer"', () => {
        const spy = jest.spyOn(console, 'log');
        exf("echo", NaN);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Error: n must be a positive integer");
        spy.mockRestore();
    }
    );
    test('exf("echo", 5.5) should print "Error: n must be a positive integer"', () => {
        const spy = jest.spyOn(console, 'log');
        exf("echo", 5.5);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Error: n must be a positive integer");
        spy.mockRestore();
    }
    );
    
}
);


