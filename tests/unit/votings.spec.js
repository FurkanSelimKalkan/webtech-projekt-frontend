import { mount } from '@vue/test-utils'
import Votings from '@/views/Votings'
import VotingsCardList from '@/components/VotingsCardList'
import VotingCreateForm from '@/components/VotingCreateForm'

jest.mock('@auth0/auth0-vue', () => ({
  withAuthenticationRequired: (compponent, _) => compponent,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'adsfm' },
      isAuthenticated: true,
      loginWithRedirect: jest.fn()
    }
  }
}))
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve()
}))

describe('Testing Votings.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Votings)

    // then
    expect(wrapper.text()).toMatch('Votings')
  })

  it('should have votings card list component', () => {
    // when
    const wrapper = mount(Votings)

    // then
    const cardList = wrapper.findComponent(VotingsCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have votings create form component', () => {
    // when
    const wrapper = mount(Votings)

    // then
    const createForm = wrapper.findComponent(VotingCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
