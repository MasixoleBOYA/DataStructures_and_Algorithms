#include <iostream>
#include <list>
using namespace std;

class YoutubeChannel{
public:
    string Name;
    string OwnerName;
    int SubscribersCount;
    list<string> VideoTitles; 
};

int main(){
    YoutubeChannel myChannel;
    myChannel.Name = "MB Vlogs";
    myChannel.OwnerName = "Masixole Boya";
    myChannel.SubscribersCount = 2000;
    myChannel.VideoTitles = {"First Video", "Second video"};


    return 0;
}