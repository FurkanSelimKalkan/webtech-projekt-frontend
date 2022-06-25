import { shallowMount } from '@vue/test-utils'
import VotingCard from '@/components/VotingCard'

jest.mock('@auth0/auth0-vue', () => ({
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'adsfm' },
      isAuthenticated: true,
      loginWithRedirect: jest.fn()
    }
  }
}))

describe('VotingCard', () => {
  it('shows who voting is from', () => {
    const wrapper = shallowMount(VotingCard,
      {
        propsData: {
          voting: {
            id: 1,
            title: 'This or That?',
            image1: 'test.jpg',
            image2: 'test2.jpg',
            votingsImage1: 1,
            votingsImage2: 2,
            ownerId: 1234,
            userName: 'Testuser',
            votedUsers: []
          }
        }
      }
    )
    const userName = wrapper.find('.ownerName')
    expect(userName.text()).toBe('from: Testuser')
  })
  it(' show delete button if authenticated and user.sub equals voting.ownerId', () => {
    const wrapper = shallowMount(VotingCard,
      {
        propsData: {
          voting: {
            id: 1,
            title: 'This or That?',
            image1: 'test.jpg',
            image2: 'test2.jpg',
            votingsImage1: 1,
            votingsImage2: 2,
            ownerId: 'adsfm',
            userName: 'test',
            votedUsers: []
          }
        }
      }
    )
    const show = wrapper.find('#show')
    expect(show.text()).toBe('Delete your Voting')
  })
})
