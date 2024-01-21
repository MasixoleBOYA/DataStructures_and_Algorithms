#include <iostream>
#include <list>
using namespace std;

class YoutubeChannel{
public:
    string Name;
    string OwnerName;
    int SubscribersCount;
    list<string> VideoTitles;

    YoutubeChannel(string name, string onwerName, list<string> titles){
        Name = name;
        OwnerName = onwerName;
        VideoTitles = titles; 
    } 

    void GetInfo(){
        cout<<"__PROPERTIES__"<<endl;
        cout<<" "<<endl;
        cout<<"Channel name: "<< Name <<endl;
        cout<<"The Owner name: "<< OwnerName <<endl;
        for (string i: VideoTitles){
            cout<<"Video title: "<< i <<endl;
        }

    }
};

int main(){
    list<string> videos = {"video 1", "video 2"};

    YoutubeChannel mychannel("MB'Channel", " Masixole Boya", videos);
    mychannel.GetInfo();

    return 0;
}