Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}

Vec3.prototype.max = function(v)
{
    if(v.x>v.y)
    {
	if(v.x>v.z)
	    return v.x;
	else
	    return v.z;
    }
	else if(v.y>v.z)
	    return v.y;
	else
	    return v.z;
}

Vec3.prototype.min = function(v)
{
    if(v.x<v.y)
    {
	if(v.x<v.z)
	    return v.x;
	else
	    return v.z;
    }
	else if(v.y<v.z)
	    return v.y;
	else
	    return v.z;
}

Vec3.prototype.mid = function(v)
{
    return this.x + this.y + this.z - v.min - v.max
}
