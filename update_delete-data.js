const server = require("./server");

const deleteData = (req, res) => {
  const deleteElement = req.body.deleteId;
  var starCountRef = server.firebase
    .database()
    .ref(deleteElement)
    .remove()
  .then(function() {
    res.status(204).json({message:"data successfully deleted"});
  });
};

const updateData = (req, res) => {
  const UpdatecId = req.body.cid;
  const userId = req.body.dataId;
  const changeId = req.body.changeId;
  const UpdateValue = req.body.data;
  var starCountRef = server.firebase
    .database()
    .ref(changeId).child(UpdatecId).child(userId)
    .update({UpdateValue: UpdateValue})
  .then(function() {
    res.status(202).json({message:"data successfully Updated"});
  });
}


module.exports = {
  deleteData,
  updateData
};
