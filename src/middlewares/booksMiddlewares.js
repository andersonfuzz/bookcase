const validateBody = (request, response, next) => {
    const { body } = request;

    if ((body.title === undefined) || (body.title === '')) {
        return response.status(400).json({ message: "Field 'title' is required and not empty!" });
    }
    if ((body.company === undefined) || (body.company === '')) {
        return response.status(400).json({ message: "Field 'company' is required and not empty!" });
    }
    if ((body.language === undefined)) {
        return response.status(400).json({ message: "Field 'language' is required !" });
    }
    if ((body.language === '')) {
        body.language = 'Not declared!';
    }

    if (body.pages !== undefined) {
        const parsedPages = parseInt(body.pages);
        if (isNaN(parsedPages) || parsedPages <= 0) {
            return response.status(400).json({ message: "Field 'pages' must be a valid positive number!" });
        }
        body.pages = parsedPages;
    }




    next();
};

module.exports = {
    validateBody
};