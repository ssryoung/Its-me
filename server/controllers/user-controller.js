import * as userService from '../services/user-service.js';

export async function getUser(req, res, next) {
  try {
    const userIdx = req.params.user_idx;
    const user = await userService.findUserById(userIdx);
    res.status(200).send({
      status: 200,
      message: '유저 조회 성공',
      data: user,
    });
  } catch (err) {
    next(err);
  }
}
// 비번 받아야함 => 비번 확인하는 과정 있어야함
export async function deleteUser(req, res, next) {
  try {
    const userIdx = req.params.user_idx;
    const deletedUser = await userService.deleteUser(userIdx);
    console.log(deletedUser);
    res.status(200).send({
      status: 200,
      message: '유저 정보 삭제 완료',
      data: deletedUser,
    });
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const userIdx = req.params.user_idx;
    const updated = await userService.setUser(userIdx, req.body);
    res.status(201).send({
      status: 201,
      message: '유저 정보 업데이트 완료',
      data: updated,
    });
  } catch (err) {
    next(err);
  }
}
