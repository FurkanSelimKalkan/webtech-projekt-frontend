import { shallowMount } from '@vue/test-utils'
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

describe('Testing PersonsCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = shallowMount(VotingCreateForm)

    // then
    expect(wrapper.find('#votings-create-offcanvas').classes()).not.toContain('show')
  })
})
