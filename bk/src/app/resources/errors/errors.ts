export const errors = {
  messages: {
    not_found: {
      code: 404,
    }
  },
  auth: {
    fail_action:{
      code: 500,
    }, 
    user_not_found:{
      code: 404,
    },
    wrong_password:{
      code: 401,
    },
    wrong_code:{
      code: 401,
    },
    code_expired:{
      code: 401,
    },
    without_password_or_code:{
      code: 401,
    },
    need_to_wait_code:{
      code: 401,
    },
    max_code_generated:{
      code: 401,
    }
  }
}