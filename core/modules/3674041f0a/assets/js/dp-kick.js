jQuery(document).ready(function()
{var data={action:'duplicator_pro_process_worker',nonce:dp_gateway.duplicator_pro_process_worker_nonce,}
dp_kickme=function()
{console.log("dp_kick");jQuery.ajax({async:true,type:"POST",url:dp_gateway.ajaxurl,timeout:10000000,data:data,complete:function(){},success:function(respData){if('ok'!=respData){try{var data=DupPro.parseJSON(respData);}catch(err){console.error(err);console.error('JSON parse failed for response data: '+respData);return false;}
if(data['status']==0)
{}
else
{console.log(data);}}},error:function(data){console.log(data);}});}
dp_kickme();window.setInterval(dp_kickme,dp_gateway.client_call_frequency);});