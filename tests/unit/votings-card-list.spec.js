import { shallowMount } from '@vue/test-utils'
import VotingCardList from '@/components/VotingsCardList'
import VotingCard from '@/components/VotingCard'

describe('Testing VotingsCardList.vue', () => {
  it('should render a voting card for each voting', () => {
    // when
    const wrapper = shallowMount(VotingCardList, {
      propsData: {
        votings: [
          {
            id: 1,
            title: 'This or That?',
            image1: 'test.jpg',
            image2: 'test2.jpg',
            votingsImage1: 1,
            votingsImage2: 2,
            ownerId: 1234,
            userName: 'Testuser',
            votedUsers: []
          },
          {
            id: 2,
            title: 'This or That?',
            image1: 'test.jpg',
            image2: 'test2.jpg',
            votingsImage1: 1,
            votingsImage2: 2,
            ownerId: 1234,
            userName: 'Testuser',
            votedUsers: []
          }
        ]
      }
    })

    // then
    const votingCards = wrapper.findAllComponents(VotingCard)
    expect(votingCards.length).toBe(2)
  })
})
