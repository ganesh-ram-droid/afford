const cart = [];

export const LogSend = async (req, res) => {
    try {
        const { stack, level, module, message } = req.body;

        const log = {
            stack,
            level,
            module,
            message,
            timestamp: new Date()
        };

        cart.push(log);

        console.log(
            `Stack:[${stack}], Level:[${level}], Module:[${module}], Message:[${message}]`
        );

        return res.status(200).json({
            success: true,
            log
        });

    } catch (error) {
        console.log(error.message);
        
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};