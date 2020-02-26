{
  entities: {
    users: {
      4: {
        id: 4,
        username: 'testUser',
        email: 'testeremail@email.com',
        password_digest: '$2a$04$iOfhwahFymCs5weB3BNH/uXkTG65HR.qpW.bNhEjFP3ftli3o5DQC',
        session_token: 'b4GOKm4pOYU_-BOXcrUGDg',
        created_at: <DateTime: 2001-02-03T04:05:06+00:00 ...>,
        updated_at: <DateTime: 2015-03-04T04:05:06+20:01 ...>
      }
    },
    songs: {
      9: {
        id: 9,
        title: 'best song ever!',
        description: 'def best song ever...',
        artist_id: '4',
        created_at: <DateTime: 2301-12-03T04:05:06+00:00 ...>,
        updated_at: <DateTime: 2935-03-04T04:05:16+22:01 ...>
      }
    },
    comments: {
      5: {
        id: 5,
        body: 'this song lame',
        song_comment_id: 5,
        user_comment_id: 4,
        created_at: <DateTime: 2901-12-03T04:05:06+00:00 ...>,
        updated_at: <DateTime: 3035-03-04T04:05:16+22:01 ...>
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect login information."],
    songTitle: ["Song title cannot be blank."]
  },
  session: { currentUserId: 9 }
}
