
import { ReactNode } from "react";
import { ScreenNames } from "./screenNames";

export interface CustomContact {
  lastMessageType: string;
  lastMessage: ReactNode;
  id: string;
  name: string;
  phoneNumber: number;
  profileImg: string;
  color: string;
}

export type RootStackParamList = {
    [ScreenNames.Home]: undefined;
    [ScreenNames.Signin]: undefined;
    [ScreenNames.Signup]: undefined;
    [ScreenNames.Add]: undefined;
    [ScreenNames.BottomTab]:undefined;
    [ScreenNames.Category]:undefined;
    [ScreenNames.Details]:undefined;
    [ScreenNames.Notify]:undefined;
    [ScreenNames.Profile]:undefined;
    [ScreenNames.Save]:undefined;
    [ScreenNames.ScreenShare]:undefined;
    [ScreenNames.Voice]:undefined;
    [ScreenNames.Setting]:undefined;
    [ScreenNames.GroupChat]:undefined;
    [ScreenNames.Splash]:undefined;
    [ScreenNames.Login]:undefined;
    [ScreenNames.Tutorial]:undefined;
    [ScreenNames.Otp]:{};
    [ScreenNames.Searching]:undefined;
    [ScreenNames.Post]:undefined;
    [ScreenNames.Scanner]:undefined;
    [ScreenNames.DealerSearch]:undefined;
    [ScreenNames.Stream]:undefined;
    [ScreenNames.Role]:undefined;
    [ScreenNames.newArrivals]:{};
    [ScreenNames.GenratorProductListing]:{};
    [ScreenNames.UserChat]: { 
      selectedUser?: CustomContact; 
    };
    [ScreenNames.hondaMarineScreen]:{};
    [ScreenNames.engineScreenName]:{};
    [ScreenNames.engineScreenName]:{}
    [ScreenNames.HondaCategory]:{}
    [ScreenNames.hiPlusAgriMachinery]:{}
    [ScreenNames.ProfileScreen]:undefined
    [ScreenNames.promotionSeeMore]:{ screenName: string}
    
    [ScreenNames.Search]: undefined;  
    [ScreenNames.Chat]: { roomId: string; selectedUser: CustomContact }; 
    [ScreenNames.GroupChatting]: { roomId: string }; 
    [ScreenNames.ProductDetailPage]:{}
    [ScreenNames.Training]:undefined
    [ScreenNames.WebViewScreen]:{url:string}
    [ScreenNames.RetailerFormScreen]:undefined
    [ScreenNames.EquipmentTraining]: { screenName: string,productType:string,productCategory:string }
    [ScreenNames.YoutubeVideoScreen]:{}
    [ScreenNames.DownLoadContentScreen]:{}
    [ScreenNames.commonDownloadScreen]:{}
    [ScreenNames.VerifyEmail]:{}

  };