import { UsersResult, Tag } from 'types/api';

export const mockUserData: UsersResult = {
  total: 100,
  totalPages: 10,
  page: 1,
  pageSize: 10,
  data: [
    {
      id: '7f87f515-d104-428c-a940-e2bd6f8464f4',
      name: 'Kylie Towne',
      username: 'Domenico.Schumm98',
      avater: 'https://cdn.fakercloud.com/avatars/tweetubhai_128.jpg',
      isFollowing: false,
    },
    {
      id: '6efc316c-a064-4322-a2b5-51c5ed2cf4f8',
      name: 'Bertrand Buckridge',
      username: 'Mustafa29',
      avater: 'https://cdn.fakercloud.com/avatars/nicolasfolliot_128.jpg',
      isFollowing: false,
    },
    {
      id: 'a092b358-1d95-4644-9527-8825656e21a3',
      name: 'Erich Jenkins',
      username: 'Margie85',
      avater: 'https://cdn.fakercloud.com/avatars/andrewarrow_128.jpg',
      isFollowing: false,
    },
    {
      id: '758d9d23-9db2-4fdb-ad59-b7886c81f7c6',
      name: 'Ruby Yost',
      username: 'Hailie.Waters',
      avater: 'https://cdn.fakercloud.com/avatars/popey_128.jpg',
      isFollowing: true,
    },
    {
      id: 'd016fa51-0235-4deb-89f4-908b3ee23b32',
      name: 'Margaret Mraz',
      username: 'Sigmund_Purdy87',
      avater: 'https://cdn.fakercloud.com/avatars/akmur_128.jpg',
      isFollowing: false,
    },
    {
      id: '39e1151f-cdf7-49bb-aba8-2c3227ab60c8',
      name: 'Megane Strosin',
      username: 'Carolina.Terry53',
      avater: 'https://cdn.fakercloud.com/avatars/jnmnrd_128.jpg',
      isFollowing: true,
    },
    {
      id: '6a254ef6-41a4-4edb-b9a2-e960c16cf382',
      name: 'Juston Baumbach',
      username: 'Burley.Marks',
      avater: 'https://cdn.fakercloud.com/avatars/phillapier_128.jpg',
      isFollowing: true,
    },
    {
      id: 'c98a72dc-ee06-41c1-b0ee-90a0faa09301',
      name: 'Keara Green',
      username: 'Audreanne91',
      avater: 'https://cdn.fakercloud.com/avatars/nicollerich_128.jpg',
      isFollowing: true,
    },
    {
      id: '1c103a57-b473-4247-b30e-ac3ee68e1f03',
      name: 'Alex Runolfsdottir',
      username: 'Norwood_Roberts',
      avater: 'https://cdn.fakercloud.com/avatars/robturlinckx_128.jpg',
      isFollowing: true,
    },
    {
      id: 'f05b0115-2c6e-4000-9923-df6f6d98457b',
      name: 'Cooper Wintheiser',
      username: 'Hulda42',
      avater: 'https://cdn.fakercloud.com/avatars/oskamaya_128.jpg',
      isFollowing: false,
    },
  ],
};

export const mockTagData: Tag[] = [
  {
    id: '7d9b29ab-17d8-4878-be28-0b0999d4fed9',
    name: 'Fantastic Frozen Chips',
    count: 165,
  },
  {
    id: '8335595c-4b39-4d3f-8b99-a70891a6d994',
    name: 'Incredible Frozen Cheese',
    count: 155,
  },
  {
    id: '3e35e65d-414e-4bbb-ac54-9ef3852d638d',
    name: 'Practical Frozen Computer',
    count: 10,
  },
  {
    id: '44833420-8766-4a3a-9b24-0c855f466f42',
    name: 'Unbranded Cotton Bacon',
    count: 116,
  },
  {
    id: '2a5e5f98-b8ac-412d-9511-dd38ec42d212',
    name: 'Ergonomic Rubber Gloves',
    count: 151,
  },
  {
    id: '693c6b02-7e6c-41fd-bf38-82b4f21f783c',
    name: 'Fantastic Concrete Pizza',
    count: 194,
  },
  {
    id: 'e84f3d68-9fd2-4fa8-aecc-66b710828a20',
    name: 'Unbranded Rubber Shirt',
    count: 154,
  },
  {
    id: '60017f0a-f78a-406b-b405-44cae292e638',
    name: 'Tasty Cotton Salad',
    count: 18,
  },
  {
    id: '1daad9c4-843a-4a47-b674-b437b6dea8f2',
    name: 'Rustic Steel Shoes',
    count: 45,
  },
  {
    id: '8e7c09bf-2cbf-49e1-bd69-8ebcb15a9929',
    name: 'Incredible Frozen Towels',
    count: 163,
  },
  {
    id: 'e4328d8f-061d-4acc-b559-75b0d618b0a6',
    name: 'Tasty Concrete Chicken',
    count: 172,
  },
  {
    id: '8df49da9-4070-44e7-a1dd-822a74039faf',
    name: 'Awesome Concrete Chips',
    count: 197,
  },
  {
    id: 'dcf5ff6f-48ee-4eba-a574-8e7a9a20c83f',
    name: 'Small Granite Bacon',
    count: 80,
  },
  {
    id: '7e608f99-0803-497c-8f3d-7721ffa0b10d',
    name: 'Fantastic Fresh Fish',
    count: 109,
  },
  {
    id: '2b4d05ba-0614-43c0-8233-e1fd9f3543cf',
    name: 'Practical Plastic Salad',
    count: 90,
  },
  {
    id: 'd9867e7e-12e7-47d5-b914-957c31ab52e8',
    name: 'Practical Metal Salad',
    count: 151,
  },
  {
    id: 'c683bcde-e26e-4275-ba8b-8851bc9aee3e',
    name: 'Handmade Wooden Gloves',
    count: 170,
  },
  {
    id: 'adcbf03f-88b4-412a-9503-6d9b3fed319b',
    name: 'Practical Cotton Shirt',
    count: 73,
  },
  {
    id: '59773d9c-07a2-4499-a401-a4fe0eb0bee1',
    name: 'Unbranded Plastic Chips',
    count: 92,
  },
  {
    id: '2e6dcaf7-8e9c-475a-8f6e-bdf2c0e5bf16',
    name: 'Fantastic Cotton Gloves',
    count: 111,
  },
  {
    id: '29e68fd0-79bd-463a-abea-e72e0568ae4a',
    name: 'Unbranded Steel Gloves',
    count: 46,
  },
  {
    id: '0b1dde19-0008-4eb6-ad71-3b3ea9c46fdc',
    name: 'Small Fresh Chair',
    count: 88,
  },
  {
    id: '4d3c4511-bf93-41a9-9451-3aa242e1384e',
    name: 'Gorgeous Metal Table',
    count: 122,
  },
  {
    id: '0e7dd010-597c-4b0e-b088-8c8aa781ea7d',
    name: 'Handmade Steel Ball',
    count: 177,
  },
];