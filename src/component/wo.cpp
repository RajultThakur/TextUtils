#include<iostream>
#include<vector>
using namespace std;
void printFirstNegativeinteger(int arr[],int n,int k){
    if(n<k) return;
                    vector<int> res;
                    int i=0;
                    int j=k-1;
                    while(i<=n-k){
                        int t = i+1,flag=0;
                        int count=k-1;
                        if(arr[i]<0)
                        res.push_back(arr[i]);
                        else{
                        while(count--){
                            if(arr[t]<0){
                                flag=1;
                                res.push_back(arr[t]);
                                break;
                            }
                            t++;
                        }
                        if(flag==0){
                                res.push_back(0);
                                flag =1;
                            }
                        }
                        i++;j++;
                    }
                  for(int i=0;i<res.size();i++){
                      cout<<res[i]<<" ";
                  }
 }

int main(){
int arr[] ={-8, 2, 3, -6, 10};
printFirstNegativeinteger(arr,5,2);
return 0;
}