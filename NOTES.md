
#### TODO

#### DONE
* Remove Semantic-ui and it's dependencies from Production.

#### Milestone
* Switching from Openshift to Heroku  
  1. Openshift rhc do not support https connection.
  2. Openshift node runtime is running a very low version of gcc, which will cause some modules fail to install with lastest version of Node.
* Giving up Heroku  
  1. Heroku free plan sleep within 30mins no visits.
  2. Heroku redis free plan has no persistence solution.
* Try to use two separate Openshift application
  * One uses Node 0.10 version only to fetch datas, just like delay job.
  * Another one uses and app server.
  * They will connect to the same Redis server.
