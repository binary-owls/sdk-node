import { defaultsFavoringLast } from '../src'

describe('defaultsFavoringLast', () => {
  it('merge objects with defaults', async () => {
    const input = [
      {
        a: 1,
        b: 2,
        c: 44,
        boo: false,
        emptyStr: '',
      },
      {
        a: 3,
        c: undefined,
      },
      {
        d: null,
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      a: 3,
      b: 2,
      c: 44,
      d: null,
      boo: false,
      emptyStr: '',
    })
  })

  it('defaults to empty string if previous is unqualified', async () => {
    const input = [
      {
        emptyStr: null,
      },
      {
        emptyStr: '',
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      emptyStr: '',
    })
  })

  it('ignores empty values', async () => {
    const input = [
      null,
      undefined,
      {
        a: 1,
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      a: 1,
    })
  })

  it('defaults to null/undefined', async () => {
    const input = [
      {
        val: null,
      },
      {
        val: undefined,
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      val: undefined,
    })
  })

  it('defaults to current unqualified, if previous is empty string', async () => {
    const input = [
      {
        emptyStr: '',
      },
      {
        emptyStr: null,
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      emptyStr: null,
    })
  })

  it('defaults to previous if current is empty string', async () => {
    const input = [
      {
        emptyStr: 'lorem',
      },
      {
        emptyStr: '',
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      emptyStr: 'lorem',
    })
  })

  it('retains false boolean', async () => {
    const input = [
      {
        boo: false,
      },
      {
        boo: undefined,
      },
      {
        boo: null,
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      boo: false,
    })
  })

  it('merges arrays', async () => {
    const input = [
      {
        list: [123],
      },
      {
        list: [],
      },
    ]
    expect(defaultsFavoringLast(input)).toStrictEqual({
      list: [123],
    })
  })

  // it('cannot update id of existing model', async () => {
  //   const user = await User.query().insert({ email: 'hercules@greece.myth', password: 'Tru3Her0' })
  //   const updateUser = user.$query().patchAndFetchById(user.id, { id: 420 })
  //   await expect(updateUser).rejects.toThrow('Cannot update id')
  // })
  //
  // it(`ignores hashing password field when patching a record where password isn't updated`, async () => {
  //   const user = await User.query().insert({ email: 'ash@poke.mon', password: 'Turtle123!' })
  //   jest.spyOn(user, 'generateHash')
  //
  //   // update another column
  //   await user.$query().patchAndFetchById(user.id, { email: 'brock@poke.mon' })
  //
  //   expect(user.generateHash).toHaveBeenCalledTimes(0)
  // })
  //
  // it('is invalid with no password', async () => {
  //   const user = User.query().insert({ email: 'ash@poke.mon' })
  //   return user.catch(err => {
  //     expect(err).toHaveProperty('name', 'ValidationError')
  //     expect(err).toHaveProperty('type', 'ModelValidation')
  //     expect(err.data.password[0].keyword).toBe('required')
  //   })
  // })
  //
  // it('is invalid with no email', async () => {
  //   const user = User.query().insert({ password: 'supersecret' })
  //   return user.catch(err => {
  //     expect(err).toHaveProperty('name', 'ValidationError')
  //     expect(err).toHaveProperty('type', 'ModelValidation')
  //     expect(err.data.email[0].message).toBe('is a required property')
  //   })
  // })
  //
  // it('is valid with facebookId', async () => {
  //   const user = await User.query().insert({ facebookId: '123450000012345' })
  //   expect(user.facebookId).toBe('123450000012345')
  //   expect(user.email).toBeUndefined()
  //   expect(user.password).toBeUndefined()
  // })
  //
  // it('throws an error when attempting to hash a bcrypt hash', async () => {
  //   const user = User.query().insert({
  //     email: 'ash@poke.mon',
  //     password: '$2a$12$sWSdI13BJ5ipPca/f8KTF.k4eFKsUtobfWdTBoQdj9g9I8JfLmZty',
  //   })
  //   await expect(user).rejects.toThrow('password is already hashed')
  // })
  //
  // it('checks correctly formatted name', () => {
  //   const nameChecks = [
  //     { name: `Jon Doe`, shouldBeValid: true },
  //     { name: `Jonathan Taylor Thomas`, shouldBeValid: true },
  //     { name: `Julia Louis-Dreyfus`, shouldBeValid: true },
  //     { name: `Jean-Paul Sartre`, shouldBeValid: true },
  //     { name: `Pat O'Brien`, shouldBeValid: true },
  //     { name: `Þór Eldon`, shouldBeValid: false },
  //     { name: `Marcus Wells-O'Shaugnessy`, shouldBeValid: true },
  //     { name: `Stephen Wells-O'Shaugnessy Marcus`, shouldBeValid: true },
  //     { name: `This-Is-A-Crazy-Name Jones`, shouldBeValid: true },
  //     { name: `---- --------`, shouldBeValid: false },
  //     { name: `'''' ''''''''`, shouldBeValid: false },
  //     { name: `'-'- -'-'-'-'`, shouldBeValid: false },
  //     { name: `a-'- b'-'-'-'`, shouldBeValid: false },
  //     { name: `'-'c -'-'-'-d`, shouldBeValid: false },
  //     { name: `e-'f g'-'-'-h`, shouldBeValid: false },
  //     { name: `'ij- -klmnop'`, shouldBeValid: false },
  //   ]
  //   for (const { name, shouldBeValid } of nameChecks) {
  //     const createUserWithName = User.query().insert({
  //       name,
  //       facebookId: `fake-${name}`,
  //     })
  //     if (shouldBeValid) {
  //       expect(createUserWithName).resolves.toHaveProperty('name', name)
  //     } else {
  //       expect(createUserWithName).rejects.toThrowError(/should match pattern/)
  //     }
  //   }
  // })
})
