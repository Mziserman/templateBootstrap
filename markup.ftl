<#list products as product>
    <#assign prixnormal = product.regularPrice>
    <#assign prixpromo = product.appliedPrice>
    <#assign pourcentageremise = ((product.regularPrice - product.appliedPrice) * 100 / product.regularPrice)?round>
</#list>