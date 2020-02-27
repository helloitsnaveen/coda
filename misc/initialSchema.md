# Database Schema 

## _`users`_
| **column_name**     | **data_type** | **details**                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| username        | string    | not null, indexed, uniqueness |
| email           | string    | not null, indexed, uniqueness |
| password_digest | string    | not null                      |
| session_token   | string    | not null, indexed, uniqueness |
| created_at      | datetime  | not null                      |
| updated_at      | datetime  | not null                      |

* user has_many songs
* user has_many user comments _(user_comment_id)_


## _`songs`_
| **column_name** | **data_type** | **details**               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| title       | string    | not null              |
| description | string    | not null              |
| artist_id   | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

* song belongs_to user _(artist_id)_
* song has_many song comments _(song_comment_id)_



## _`comments`_ 
| **column_name**     | **data_type** | **details**               |
|-----------------|-----------|-----------------------|
| id              | integer   | not null, primary key |
| body            | text      | not null              |
| song_comment_id | integer   | not null, foreign key |
| user_comment_id | integer   | not null, foreign key |
| created_at      | datetime  | not null              |
| updated_at      | datetime  | not null              |

* comment belongs_to song _(song_comment_id)_
* comment belongs_to user _(user_comment_id)_

 ## _`likes`_
| **column_name** | **data_type** | **details**               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| liker_id    | integer   | not null, foreign key |
| song_id     | integer   | not null, foreign key |

* foreign key _liker_id_ points to a user
* foreign key _song_id_ points to a song
