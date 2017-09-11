// export class ImageContainer {
//
//
//   constructor( _id:string,  imageId: string,   imageName: string,  imageTags: string[],
//                 imageURL: string,   imageAuthor: string,  imageAuthor_id: string,   imageVoteCount?: number,
//                 imagePublishDate?: string,   imageComments?: string) {
//   }
// }


export interface ImageContainer{

  _id?:string,
  imageId: string,
  imageName: string,
  imagePublishDate: string,
  imageAuthor: string,
  imageAuthor_id: string,
  imageURL?: string,  imageVoteCount?: number,  imageTags?: string[],   imageComments?: string

}



export interface SiteUser {
  _id?:string,

  userName: string,
  password: string,
  fullName?: string,
  email?: string,

  profileID?: string,  profilePicURL?: string,  votes?: string[], comments?: { comment: string; image: string }[],  uploaded?: string[],   dateOfSignup?: Date,   lastLogin?: Date
}

export interface BlogPost{
  _id?:string,
  blogTitle:string,
  blogHTML?:string,
  blogAuthor_id?:string,
  blogAuthor_fullName?:string,
  blogCreationDate?:Date,
  blogLastUpdatedDate?:Date,
  blogLikes?:number,
  blogComments?:string[],

}
