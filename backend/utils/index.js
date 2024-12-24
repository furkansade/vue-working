import mongoose from "mongoose";

const isValidObjectId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ message: "Projenin kimliği sisteme uygun değil!" });
  }
};

const findDocumnetById = async (model, id, res) => {
    try {
        const document = await model.findById(id);

        if(!document) {
            res.status(404).json({ message: 'İstenilen kayıt sistemde bulunamadı!' });
            return null;
        }
        return document;
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    }
}

export {
    isValidObjectId,
    findDocumnetById
}